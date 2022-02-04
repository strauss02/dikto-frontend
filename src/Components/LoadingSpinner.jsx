import React from 'react'
import CircularProgress from '@mui/material/CircularProgress'

function LoadingSpinner() {
  return (
    <div>
      <CircularProgress size={'8rem'} color="secondary" />
    </div>
  )
}

export default LoadingSpinner
