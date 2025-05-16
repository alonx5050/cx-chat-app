import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import conversationRoutes from './routes/conversation.routes'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

// ✅ Simple logger middleware
app.use((req, res, next) => {
  const start = Date.now()
  res.on('finish', () => {
    const duration = Date.now() - start
    console.log(`[${req.method}] ${req.originalUrl} → ${res.statusCode} (${duration}ms)`)
  })
  next()
})

// ✅ Mount routes
app.use('/api/conversations', conversationRoutes)

// ✅ Start server
app.listen(3000, () => {
  console.log('🚀 Server running on http://localhost:3000')
})
