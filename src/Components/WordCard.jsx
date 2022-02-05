import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router'
import React from 'react'
// full word object passed as entry
function WordCard({ entry }) {
  let navigate = useNavigate()

  function handleWordClick(word) {
    console.log(word)
    navigate(`/${word}`)
  }

  // entry is used only for key creation
  function renderClickableParagraph(paragraph, entry) {
    return paragraph.split(/ /g).map((word, i) => (
      <span
        key={`${entry.Word}${entry.Pos}${word}${i}`}
        onClick={() => handleWordClick(word)}
      >
        {word}{' '}
      </span>
    ))
  }

  // const clickableDefinition = renderClickableParagraph(entry.Definitions)

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
          {renderClickableParagraph(entry.Definitions, entry)}
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
