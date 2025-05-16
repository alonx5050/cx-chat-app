export interface User {
  id: string
  firstName: string
  lastName: string
  email: string
}

export interface Message {
  id: string
  content: string
  direction: 'in' | 'out'
  timestamp: string
  conversationId: string
}

export interface Conversation {
  id: string
  caseId: string
  productId: string
  productName: string
  status: string
  createdAt: string
  lastUpdated: string
  userId: string
  user: User
  messages: Message[]
}
