import { Request, Response } from 'express';
import * as service from '../services/conversation.service';

export const getConversation = async (req: Request, res: Response) => {
  console.log('➡️ getConversation called with params:', req.params);
  try {
    const { id } = req.params;
    const conversation = await service.getConversationWithMessages(id);

    if (!conversation) {
      console.warn('⚠️ Conversation not found for id:', id);
      return res.status(404).json({ message: 'Conversation not found' });
    }

    console.log('✅ getConversation success for id:', id);
    return res.json(conversation);
  } catch (err) {
    console.error('❌ getConversation error:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const postMessage = async (req: Request, res: Response) => {
  console.log('➡️ postMessage called with params:', req.params, 'body:', req.body);
  try {
    const { id } = req.params;
    const { content } = req.body;

    if (!content) {
      console.warn('⚠️ postMessage missing content in body');
      return res.status(400).json({ message: 'Message content is required' });
    }

    const result = await service.addUserMessageAndBotReply(id, content);
    console.log('✅ postMessage success for conversation id:', id);
    return res.status(201).json(result);
  } catch (err) {
    console.error('❌ postMessage error:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};
