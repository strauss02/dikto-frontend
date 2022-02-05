import { API_URL } from './config'

export async function fetchWordData(word) {
  const answer = await fetch(`${API_URL}/word/${word}`)
  return answer.json()
}

export async function fetchSpecificWordData(word, pos) {
  const answer = await fetch(`${API_URL}/word/${word}/${pos}`)
  return answer.json()
}

//send a number that represents the part of speech
export async function fetchRandomWord(pos, letter) {
  let answer
  if (letter) {
    answer = await fetch(`${API_URL}/pos/${pos}?letter=${letter}`)
  } else {
    answer = await fetch(`${API_URL}/pos/${pos}`)
  }
  try {
    const response = await answer.json()
    return response
  } catch {
    return
  }
}

export function makeLinkPath(pos, letter) {
  // if (pos && letter === 'none') {
  // return `/pos/${pos}`
  // } else if (pos && letter) {
  return `/pos/${pos}/${letter}`
  // }
}
