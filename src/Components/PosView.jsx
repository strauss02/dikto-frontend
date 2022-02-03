import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'

const posByNum = {
  1: 'noun',
  2: 'pronoun',
  3: 'verb',
  4: 'adjective',
  5: 'adverb',
  6: 'preposition',
  7: 'conjugation',
  8: 'interjection',
}

function PosView() {
  return (
    <div>
      <Typography sx={{ color: 'white', bgcolor: '#80c7c9' }} variant="body1">
        {' '}
        Give me a random example word of a...
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        {Object.entries(posByNum).map((entry) => {
          return (
            <Link to={`/pos/${entry[0]}`}>
              <Button variant="contained">{entry[1]}</Button>
            </Link>
          )
        })}
      </Box>
    </div>
  )
}

export default PosView
