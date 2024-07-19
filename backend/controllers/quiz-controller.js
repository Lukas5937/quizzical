import getQuestionsData from '../util/questions.js'

export const getQuestions = async (req, res, next) => {
  let questions
  try {
    questions = await getQuestionsData()
  } catch (error) {
    return next(error)
  }
  res.status(201).json({ questions })
}
