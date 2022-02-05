import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router'

function HomeButton() {
  const navigate = useNavigate()
  return (
    <div>
      <Button onClick={() => navigate('/')}> Back to Home</Button>
    </div>
  )
}

export default HomeButton
