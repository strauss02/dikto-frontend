import { Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { fetchRandomWord, fetchWordData } from '../Utils/utils'
import WordCard from './WordCard'
import LoadingSpinner from './LoadingSpinner'
function WordView() {
  const [wordEntries, setWordEntries] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [params, setParams] = useState(useParams())

  useEffect(() => {
    async function getEntries() {
      // if a specific word was requested..
      if (params.word) {
        let word = params.word
        const entries = await fetchWordData(word)
        setWordEntries(entries)
        setIsLoading(false)
      } else {
        // if a random word was requested..
        const entries = await fetchRandomWord(params.part, params.letter)
        //prevent adding 'undefined' as an array item
        entries ? setWordEntries([entries]) : setWordEntries([])
        setIsLoading(false)
      }
    }
    getEntries()
  }, [params])

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <div>
      {wordEntries.length === 0 && (
        <Typography>Sorry, we couldn't find that word :( </Typography>
      )}
      {wordEntries.length === 1 && (
        // Words that have only 1 definition get their own view, because their path is different.
        <Navigate to={`/${wordEntries[0].Word}/${wordEntries[0].Pos} `} />
      )}
      {wordEntries.length > 1 && (
        <div>
          {wordEntries.map((entry, i) => {
            return (
              <WordCard
                entry={entry}
                setParams={setParams}
                key={`${entry.Word}${entry.Pos}${i}`}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}

export default WordView
