import { Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { API_URL } from '../Utils/config'
import { fetchRandomWord, fetchWordData } from '../Utils/utils'
import WordCard from './WordCard'
function WordView(props) {
  const params = useParams()

  const [wordEntries, setWordEntries] = useState([])

  useEffect(() => {
    async function getEntries() {
      console.log(params)

      if (params.word) {
        let word = params.word
        const entries = await fetchWordData(word)
        setWordEntries(entries)
      } else {
        const entries = await fetchRandomWord(2)
        setWordEntries([entries])
      }
    }
    getEntries()
  }, [])

  console.log(wordEntries)

  return wordEntries.length !== 1 ? (
    <div>
      {wordEntries.map((entry) => {
        return <WordCard entry={entry} />
      })}
    </div>
  ) : (
    <Navigate to={`/${wordEntries[0].Word}/${wordEntries[0].Pos} `} />
  )
}

export default WordView
