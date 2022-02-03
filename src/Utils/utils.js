import { API_URL } from './config'

export async function fetchWordData(word) {
  const answer = await fetch(`${API_URL}/word/${word}`)
  return answer.json()
}

export async function fetchSpecificWordData(word, pos) {
  const answer = await fetch(`${API_URL}/word/${word}/${pos}`)
  return answer.json().Item
}

export async function fetchRandomWord(pos) {
  const answer = await fetch(`${API_URL}/pos/${pos}`)
  const response = await answer.json()
  console.log(response)
  return response
}
