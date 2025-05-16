import { Container, CssBaseline } from '@mui/material'
import ChatPage from './pages/ChatPage'

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ px: { xs: 1, sm: 2 }, py: 4 }}>
        <ChatPage />
      </Container>
    </>
  )
}

export default App
