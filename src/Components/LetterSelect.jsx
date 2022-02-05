import React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { ALPHABET } from '../Utils/constants'

function LetterSelect(props) {
  return (
    <Box sx={{ minWidth: '8rem' }}>
      <FormControl fullWidth>
        <InputLabel id="letter-select-label">Letter</InputLabel>
        <Select
          variant="filled"
          labelId="letter-select-label"
          id="letter-select"
          value={props.letter}
          label="Letter"
          onChange={props.handleChange}
          MenuProps={{
            // PaperProps maxHeight is applied to prevent pop-up menu from being too large and going off-screen.
            PaperProps: { sx: { maxHeight: 180 } },
            // transformOrigin and anchorOrigin modify the pop-up menu to expand from the center of the Select. (Instead of expanding from the bottom)
            anchorOrigin: {
              vertical: 'center',
              horizontal: 'center',
            },
            transformOrigin: {
              vertical: 'center',
              horizontal: 'center',
            },
          }}
        >
          {/* Iterate over the alphabet and make a MenuItem element for each letter */}
          {ALPHABET.map((letter) => {
            return <MenuItem value={letter}>{letter}</MenuItem>
          })}
        </Select>
      </FormControl>
    </Box>
  )
}

export default LetterSelect
