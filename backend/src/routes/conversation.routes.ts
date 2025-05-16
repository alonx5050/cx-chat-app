import { Router, RequestHandler } from 'express';
import { getConversation, postMessage } from '../controllers/conversation.controller';

const router = Router(); // ✅ this is a proper router

router.get('/:id', getConversation as RequestHandler);
router.post('/:id/messages', postMessage as RequestHandler);

export default router;
