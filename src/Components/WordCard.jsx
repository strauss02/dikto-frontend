import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router'
import React from 'react'

// This components gets the whole 'word' object entry.
// It is passed setParams as props from  'WordView' so it could trigger a rerender.

function WordCard({ entry, setParams }) {
  let navigate = useNavigate()

  function handleWordClick(word) {
    navigate(`/${word}`)
    setParams({ word })
  }

  function renderClickableParagraph(paragraph, entry) {
    // Paragraph gets split into an array of words.
    return paragraph.split(/ /g).map((word, i) => (
      <span
        key={`${entry.Word}${entry.Pos}${word}${i}`}
        onClick={() => handleWordClick(word)}
      >
        {/* a space gets added after each word */}
        {word}{' '}
      </span>
    ))
  }

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
    </Card>
  )
}

export default WordCard
