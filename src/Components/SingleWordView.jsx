import { Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { API_URL } from '../Utils/config'
import { fetchSpecificWordData, fetchWordData } from '../Utils/utils'
import WordCard from './WordCard'
function SingleWordView(props) {
  let { word, pos } = useParams()
  const [wordEntry, setWordEntry] = useState({})

  useEffect(() => {
    async function getEntry() {
      const entry = await fetchSpecificWordData(word, pos)
      setWordEntry(entry.Item)
    }
    getEntry()
    console.log(wordEntry)
  }, [])

  return wordEntry.Word ? (
    <WordCard entry={wordEntry} />
  ) : (
    <Typography>Sorry, we couldn't find that word :(</Typography>
  )
}

export default SingleWordView
