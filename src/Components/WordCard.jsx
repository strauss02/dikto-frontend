import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import React from 'react'
// full word object passed as entry
function WordCard({ entry }) {
  return (
    <Card sx={{ minWidth: 275, m: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {entry.Word}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {entry.Pos}
        </Typography>
        <Typography variant="body2">
          {entry.Definitions}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        {/*  button for future use */}
        <Button size="small"></Button>
      </CardActions>
    </Card>
  )
}

export default WordCard
