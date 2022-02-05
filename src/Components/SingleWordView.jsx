import { Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { API_URL } from '../Utils/config'
import { fetchSpecificWordData, fetchWordData } from '../Utils/utils'
import LoadingSpinner from './LoadingSpinner'
import WordCard from './WordCard'
function SingleWordView(props) {
  let { word, pos } = useParams()
  const [wordEntry, setWordEntry] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function getEntry() {
      const entry = await fetchSpecificWordData(word, pos)
      setWordEntry(entry.Item)
      setIsLoading(false)
    }
    getEntry()
    console.log(wordEntry)
  }, [])

  return isLoading ? (
    <LoadingSpinner></LoadingSpinner>
  ) : (
    <WordCard entry={wordEntry} />
  )
}

export default SingleWordView
