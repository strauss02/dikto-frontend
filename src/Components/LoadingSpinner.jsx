import React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import { Box } from '@mui/system'

function LoadingSpinner() {
  return (
    <Box sx={{ textAlign: 'center', padding: '70px 0' }}>
      <CircularProgress size={'8rem'} color="secondary" />
    </Box>
  )
}

export default LoadingSpinner
