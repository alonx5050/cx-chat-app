import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getConversationWithMessages = async (conversationId: string) => {
  return await prisma.conversation.findUnique({
    where: { id: conversationId },
    include: {
      user: true,
      messages: {
        orderBy: { timestamp: 'asc' },
      },
    },
  });
};

export const addUserMessageAndBotReply = async (conversationId: string, content: string) => {
  const userMessage = await prisma.message.create({
    data: {
      id: `user-${Date.now()}`,
      content,
      direction: 'in',
      timestamp: new Date(),
      conversationId,
    },
  });

  const botMessage = await prisma.message.create({
    data: {
      id: `bot-${Date.now()}`,
      content: 'Thanks! Our team will review and get back to you shortly.',
      direction: 'out',
      timestamp: new Date(),
      conversationId,
    },
  });

  return { userMessage, botMessage };
};
