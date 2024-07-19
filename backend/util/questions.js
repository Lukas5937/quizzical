import axios from 'axios'
import HttpError from '../models/http-error.js'

export default async function getQuestionsData() {
  const response = await axios.get(
    `https://opentdb.com/api.php?amount=10&type=multiple`
  )
  const data = response.data
  if (!data) {
    const error = new HttpError(
      'Could not find questions data for your request.',
      422
    )
    throw error
  }
  return data.results
}
