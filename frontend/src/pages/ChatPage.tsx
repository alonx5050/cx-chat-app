import { useEffect, useState } from 'react'
import { Box, CircularProgress, Typography } from '@mui/material'
import { getConversation, sendMessage } from '../api/chat'
import type { Conversation} from '../types'
import ChatHeader from '../components/ChatHeader'
import ChatBubble from '../components/ChatBubble'
import ChatInput from '../components/ChatInput'

const ChatPage = () => {
  const [conversation, setConversation] = useState<Conversation | null>(null)
  const [loading, setLoading] = useState(true)
  const [sending, setSending] = useState(false)

  useEffect(() => {
    getConversation('54321')
      .then((data) => setConversation(data))
      .catch((err) => console.error('❌ Failed to load conversation:', err))
      .finally(() => setLoading(false))
  }, [])

  const handleSend = async (text: string) => {
    if (!conversation) return
    setSending(true)
    try {
      const { userMessage, botMessage } = await sendMessage(conversation.id, text)
      setConversation((prev) =>
        prev
          ? {
              ...prev,
              messages: [...prev.messages, userMessage, botMessage],
              lastUpdated: botMessage.timestamp,
            }
          : prev
      )
    } catch (err) {
      console.error('❌ Failed to send message:', err)
    } finally {
      setSending(false)
    }
  }

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    )
  }

  if (!conversation) {
    return <Typography mt={4}>Conversation not found.</Typography>
  }

  return (
    <Box mt={4}>
      <ChatHeader conversation={conversation} />
      <Box mb={2}>
        {conversation.messages.map((msg) => (
          <ChatBubble key={msg.id} message={msg} />
        ))}
      </Box>
      <ChatInput onSend={handleSend} disabled={sending} />
    </Box>
  )
}

export default ChatPage
