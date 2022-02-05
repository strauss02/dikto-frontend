import { Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Navigate, useNavigate, useParams, useLocation } from 'react-router-dom'
import { API_URL } from '../Utils/config'
import { fetchRandomWord, fetchWordData } from '../Utils/utils'
import { ENUM_POS_MAP } from '../Utils/constants'
import WordCard from './WordCard'
import LoadingSpinner from './LoadingSpinner'
function WordView(props) {
  // let params = useParams()

  const [wordEntries, setWordEntries] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [params, setParams] = useState(useParams())
  // const location = useLocation()
  // const locationCopy = location

  // function checkURLChanged() {
  //   if (locationCopy != location) {
  //     setParams({ word: 'banana' })
  //     console.log('urlchanged')
  //   }
  // }
  // checkURLChanged()

  useEffect(() => {
    console.log('RERENDER')
    async function getEntries() {
      console.log(params)

      // if a specific word was requested..
      if (params.word) {
        let word = params.word
        const entries = await fetchWordData(word)
        setWordEntries(entries)
        setIsLoading(false)
      } else {
        // if a random word was requested..
        //first, check if beggining letter was chosen
        if (params.letter) {
          const entries = await fetchRandomWord(params.part, params.letter)
          entries ? setWordEntries([entries]) : setWordEntries([])
          setIsLoading(false)
        }
        // if no beggining letter was chosen, just fetch a randomword
        else {
          const entries = await fetchRandomWord(params.part)
          setWordEntries([entries])
          setIsLoading(false)
        }
      }
    }
    getEntries()
  }, [params])

  console.log(wordEntries)
  console.log(wordEntries.length)
  console.log(wordEntries.length > 1)
  return isLoading ? (
    <LoadingSpinner></LoadingSpinner>
  ) : (
    <div>
      {console.log('rerenering')}
      {console.log(params)}
      {wordEntries.length === 0 && (
        <Typography>Sorry, we couldn't find that word :( </Typography>
      )}
      {wordEntries.length === 1 && (
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
