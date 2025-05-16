import axios from 'axios'
import type { Conversation, Message } from '../types'

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Backend URL
})

export const getConversation = async (conversationId: string): Promise<Conversation> => {
  const response = await api.get(`/conversations/${conversationId}`)
  return response.data
}

export const sendMessage = async (
  conversationId: string,
  content: string
): Promise<{ userMessage: Message; botMessage: Message }> => {
  const response = await api.post(`/conversations/${conversationId}/messages`, { content })
  return response.data
}
