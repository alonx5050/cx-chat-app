import { Button, Typography, Container, CssBaseline } from '@mui/material'

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
        <Typography variant="h4" gutterBottom>
          ✅ React + MUI Frontend is Working!
        </Typography>
        <Button variant="contained" color="primary">
          Test Button
        </Button>
      </Container>
    </>
  )
}

export default App
