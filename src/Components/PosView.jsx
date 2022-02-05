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
      <Typography sx={{}} variant="body1">
        {' '}
        Give me a random example word of a...
      </Typography>
      {Object.entries(ENUM_FULLPOS_MAP).map((entry, i) => {
        return (
          // the link would be created according to the starting letter chosen. if no letter was chosen, makeLinkPath's logic will take care of that.
          <Link to={makeLinkPath(entry[0], letter)} key={`${entry[1]}${i}`}>
            <Button sx={{ m: 1, minWidth: '8rem' }} variant="contained">
              {entry[1]}
            </Button>
          </Link>
        )
      })}
      <Typography> That starts with the letter...</Typography>
      <LetterSelect letter={letter} handleChange={handleChange}></LetterSelect>
    </Box>
  )
}

export default PosView
