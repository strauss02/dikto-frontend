import { API_URL } from './config'

export async function fetchWordData(word) {
  const answer = await fetch(`${API_URL}/word/${word}`)
  return answer.json()
}

export async function fetchSpecificWordData(word, pos) {
  const answer = await fetch(`${API_URL}/word/${word}/${pos}`)
  return answer.json()
}

export async function fetchRandomWord(pos, letter) {
  // Returns a random word according to a certain Part of Speech. If letter argument is passed, will return a random word beggining with that letter
  let answer
  if (letter) {
    answer = await fetch(`${API_URL}/pos/${pos}?letter=${letter}`)
  } else {
    answer = await fetch(`${API_URL}/pos/${pos}`)
  }
  // If the response is empty, json() will throw an error. We prevent that by asssuming that the error means the response is empty.
  // Returning nothing will be interpreted as if there are no results.
  try {
    const response = await answer.json()
    return response
  } catch {
    return
  }
}

export function makeLinkPath(pos, letter) {
  return `/pos/${pos}/${letter}`
}
