import axios from 'axios'
import HttpError from '../models/httpError.js'

export default async function fetchQuestionsData(category, difficulty) {
  const url = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`

  const response = await axios.get(url)
  const data = response.data
  if (!data) {
    throw new HttpError('Could not find questions data for your request.', 422)
  }

  return data.results
}
