import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import { Button, Input, Typography } from '@mui/material'
import { Box } from '@mui/system'
import LetterSelect from './LetterSelect'
import { makeLinkPath } from '../Utils/utils'

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
  const [letter, setLetter] = React.useState('')

  const handleChange = (event) => {
    setLetter(event.target.value)
  }
  return (
    <div>
      <Typography sx={{}} variant="body1">
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
        {Object.entries(posByNum).map((entry, i) => {
          return (
            // the link would be created according to the starting letter chosen. if no letter was chosen, makeLinkPath's logic will take care of that.
            <Link to={makeLinkPath(entry[0], letter)} key={`${entry[1]}${i}`}>
              <Button sx={{ m: 1 }} variant="contained">
                {entry[1]}
              </Button>
            </Link>
          )
        })}
      </Box>
      <Typography> That starts with the letter...</Typography>
      <LetterSelect letter={letter} handleChange={handleChange}></LetterSelect>
    </div>
  )
}

export default PosView
