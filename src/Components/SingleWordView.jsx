import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchSpecificWordData } from '../Utils/utils'
import LoadingSpinner from './LoadingSpinner'
import WordCard from './WordCard'
function SingleWordView() {
  // URL params are used to instruct data fetching
  const [params, setParams] = useState(useParams())
  const [wordEntry, setWordEntry] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function getEntry() {
      const entry = await fetchSpecificWordData(params.word, params.pos)
      setWordEntry(entry.Item)
      setIsLoading(false)
    }
    getEntry()
  }, [params])

  return isLoading ? (
    <LoadingSpinner></LoadingSpinner>
  ) : (
    <WordCard entry={wordEntry} setParams={setParams} />
  )
}

export default SingleWordView
