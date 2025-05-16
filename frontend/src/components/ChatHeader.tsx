import { Typography, Box } from '@mui/material'
import type { Conversation } from '../types'

interface Props {
  conversation: Conversation
}

const ChatHeader = ({ conversation }: Props) => {
  return (
    <Box mb={3}>
      <Typography variant="h6">Case: {conversation.caseId}</Typography>
      <Typography variant="subtitle1">
        Product: {conversation.productName}
      </Typography>
      <Typography variant="subtitle2" color="text.secondary">
        Status: {conversation.status}
      </Typography>
    </Box>
  )
}

export default ChatHeader
