import { Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router'

function HomeButton() {
  const navigate = useNavigate()
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Button sx={{ mb: 20 }} onClick={() => navigate('/')}>
        Back to Home
      </Button>
    </Box>
  )
}

export default HomeButton
