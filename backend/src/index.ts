import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import conversationRoutes from './routes/conversation.routes'; // ✅ this is the correct import


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/conversations', conversationRoutes); // ✅ this must be the Router object

app.listen(3000, () => {
  console.log('🚀 Server running on http://localhost:3000');
});
