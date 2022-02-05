import React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

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
            PaperProps: { sx: { maxHeight: 180 } },
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
          <MenuItem value={'a'}>A</MenuItem>
          <MenuItem value={'b'}>B</MenuItem>
          <MenuItem value={'c'}>C</MenuItem>
          <MenuItem value={'d'}>D</MenuItem>
          <MenuItem value={'e'}>E</MenuItem>
          <MenuItem value={'f'}>F</MenuItem>
          <MenuItem value={'g'}>G</MenuItem>
          <MenuItem value={'h'}>H</MenuItem>
          <MenuItem value={'i'}>I</MenuItem>
          <MenuItem value={'j'}>J</MenuItem>
          <MenuItem value={'k'}>K</MenuItem>
          <MenuItem value={'l'}>L</MenuItem>
          <MenuItem value={'m'}>M</MenuItem>
          <MenuItem value={'n'}>N</MenuItem>
          <MenuItem value={'o'}>O</MenuItem>
          <MenuItem value={'p'}>P</MenuItem>
          <MenuItem value={'q'}>Q</MenuItem>
          <MenuItem value={'r'}>R</MenuItem>
          <MenuItem value={'s'}>S</MenuItem>
          <MenuItem value={'t'}>T</MenuItem>
          <MenuItem value={'u'}>U</MenuItem>
          <MenuItem value={'v'}>V</MenuItem>
          <MenuItem value={'w'}>W</MenuItem>
          <MenuItem value={'x'}>X</MenuItem>
          <MenuItem value={'y'}>Y</MenuItem>
          <MenuItem value={'z'}>Z</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

export default LetterSelect
