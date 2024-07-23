import axios from 'axios'
import HttpError from '../models/http-error.js'

export default async function getQuestionsData(category, difficulty) {
  const url = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`
  console.log(url)

  const response = await axios.get(url)
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
