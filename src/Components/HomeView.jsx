import React from 'react'
import { Typography, Input, Button } from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Box } from '@mui/system'

function HomeView() {
  const [inputValue, setInputValue] = useState('')

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h2">Dikto</Typography>
      <Typography>Vocabulary is a click away</Typography>
      <Input
        sx={{ mt: 3 }}
        placeholder="Enter a word here"
        onChange={(e) => setInputValue(e.target.value)}
      ></Input>
      <Link to={`/${inputValue}`}>
        <Button sx={{ mt: 3 }} variant="contained">
          Search Word
        </Button>
      </Link>
      <Link to={`/pos`}>
        <Button sx={{ mt: 3 }} variant="outlined">
          Parts of Speech
        </Button>
      </Link>
    </Box>
  )
}

export default HomeView
