import { Box, Typography, Paper } from '@mui/material'
import type { Message } from '../types'

interface Props {
  message: Message
}

const ChatBubble = ({ message }: Props) => {
  const isUser = message.direction === 'in'

  return (
    <Box
        display="flex"
        justifyContent={isUser ? 'flex-end' : 'flex-start'}
        mb={1}
        px={{ xs: 0.5, sm: 2 }} // 💡 padding on small screens
    >
      <Paper
        sx={{
        p: 1.5,
        maxWidth: { xs: '100%', sm: '75%' }, // 💡 responsive max width
        backgroundColor: isUser ? '#1976d2' : '#f0f0f0',
        color: isUser ? 'white' : 'black',
        borderRadius: 2,
        wordBreak: 'break-word', // 💡 handle long words
  }}
      >
        <Typography variant="body1">{message.content}</Typography>
        <Typography variant="caption" color="text.secondary">
          {new Date(message.timestamp).toLocaleString()}
        </Typography>
      </Paper>
    </Box>
  )
}

export default ChatBubble
