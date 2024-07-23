import getQuestionsData from '../util/questions.js'

export const getQuestions = async (req, res, next) => {
  const difficulty = req.body.quizSettings.difficulty
  let category

  switch (req.body.quizSettings.category) {
    case 'general-knowledge':
      category = '9'
      break
    case 'science-and-nature':
      category = '17'
      break
    case 'sports':
      category = '21'
      break
    case 'geography':
      category = '22'
      break
    case 'history':
      category = '23'
      break
    case 'politics':
      category = '24'
      break
    case 'art':
      category = '25'
      break
    case 'animals':
      category = '27'
      break
    default:
      category = '9'
  }

  let questions
  try {
    questions = await getQuestionsData(category, difficulty)
  } catch (error) {
    return next(error)
  }
  console.log(questions)
  res.status(201).json({ questions })
}
