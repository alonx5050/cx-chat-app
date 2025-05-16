import { Request, Response } from 'express';
import * as service from '../services/conversation.service';

export const getConversation = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const conversation = await service.getConversationWithMessages(id);

    if (!conversation) return res.status(404).json({ message: 'Conversation not found' });

    return res.json(conversation);
  } catch (err) {
    console.error('❌ getConversation error:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const postMessage = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { content } = req.body;

    if (!content) return res.status(400).json({ message: 'Message content is required' });

    const result = await service.addUserMessageAndBotReply(id, content);
    return res.status(201).json(result);
  } catch (err) {
    console.error('❌ postMessage error:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};
