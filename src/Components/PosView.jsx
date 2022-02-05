import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import LetterSelect from './LetterSelect'
import { makeLinkPath } from '../Utils/utils'
import { ENUM_FULLPOS_MAP } from '../Utils/constants'

function PosView() {
  const [letter, setLetter] = React.useState('')

  const handleChange = (event) => {
    setLetter(event.target.value)
  }
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}
    >
      <Typography sx={{ mt: '0.5rem' }} variant="h6">
        Give me a random example word of a...
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridTemplateRows: 'repeat(4, 1fr)',
          gridColumnGap: 0,
          gridRowGap: 0,
        }}
      >
        {/* Create a button for each part of speech  */}
        {Object.entries(ENUM_FULLPOS_MAP).map((entry, i) => {
          return (
            <Link to={makeLinkPath(entry[0], letter)} key={`${entry[1]}${i}`}>
              {/* //Link path is rendered dynamically according to the letter chosen, if any. */}
              <Button sx={{ m: 1, minWidth: '8rem' }} variant="contained">
                {entry[1]}
              </Button>
            </Link>
          )
        })}
      </Box>
      <Typography variant="h6"> That begins with the letter...</Typography>
      <LetterSelect letter={letter} handleChange={handleChange}></LetterSelect>
    </Box>
  )
}

export default PosView
