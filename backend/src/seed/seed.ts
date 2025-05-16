import { PrismaClient } from '@prisma/client';
import fs from 'fs/promises';
import path from 'path';

const prisma = new PrismaClient();

async function main() {
  console.log('📥 Reading seed files...');
  const userRaw = await fs.readFile(path.join(__dirname, 'User.json'), 'utf-8');
  const conversationRaw = await fs.readFile(path.join(__dirname, 'Conversation.json'), 'utf-8');
  const messagesRaw = await fs.readFile(path.join(__dirname, 'Messages.json'), 'utf-8');

  const user = JSON.parse(userRaw);
  const conversation = JSON.parse(conversationRaw);
  const messagesPayload = JSON.parse(messagesRaw);

  if (!user?.userId || !conversation?.conversationId || !Array.isArray(messagesPayload?.messages)) {
    throw new Error('❌ Invalid or malformed seed data');
  }

  console.log('👤 Upserting user...');
  await prisma.user.upsert({
    where: { id: user.userId },
    update: {},
    create: {
      id: user.userId,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    },
  });

  console.log('💼 Upserting conversation...');
  await prisma.conversation.upsert({
    where: { id: conversation.conversationId },
    update: {},
    create: {
      id: conversation.conversationId,
      caseId: conversation.caseId,
      productId: conversation.productId,
      productName: conversation.productName,
      status: conversation.status,
      createdAt: new Date(conversation.createdAt),
      lastUpdated: new Date(conversation.lastUpdated),
      userId: conversation.userId,
    },
  });

  console.log('💬 Inserting messages...');
  await Promise.all(
    messagesPayload.messages.map((msg: any) =>
      prisma.message.create({
        data: {
          id: msg.messageId,
          content: msg.content,
          direction: msg.direction,
          timestamp: new Date(msg.timestamp),
          conversationId: messagesPayload.conversationId,
        },
      })
    )
  );

  console.log('✅ Seeding complete.');
}

main()
  .catch(e => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
