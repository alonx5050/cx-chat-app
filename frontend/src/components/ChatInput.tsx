import { Box, Button, TextField } from '@mui/material'
import { useState } from 'react'

interface Props {
  onSend: (message: string) => void
  disabled?: boolean
}

const ChatInput = ({ onSend, disabled }: Props) => {
  const [text, setText] = useState('')

  const handleSend = () => {
    if (!text.trim()) return
    onSend(text.trim())
    setText('')
  }

  return (
    <Box display="flex" gap={1} mt={2} flexDirection={{ xs: 'column', sm: 'row' }}>
        <TextField
            fullWidth
            variant="outlined"
            placeholder="Type a message..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
            if (e.key === 'Enter') handleSend()
            }}
            disabled={disabled}
        />
        <Button variant="contained" onClick={handleSend} disabled={disabled} sx={{ minWidth: 100 }}>
            Send
        </Button>
</Box>

  )
}

export default ChatInput
