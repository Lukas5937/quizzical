import { HighScore } from '../models/high-score-model.js'
import HttpError from '../models/http-error.js'

export const createNewHighScore = async (req, res, next) => {
  // get highScore data

  let highScores
  try {
    highScores = await HighScore.find()
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not find the high score data.',
      500
    )
    return next(error)
  }

  if (!highScores) {
    const error = new HttpError(
      'Could not find high score data, please try again.',
      404
    )
    return next(error)
  }

  // create new highScore

  const createdHighScore = new HighScore({
    userName: req.body.userName,
    correctAnswers: req.body.correctAnswers,
    duration: req.body.duration,
    category: req.body.category,
    difficulty: req.body.difficulty,
  })
  try {
    await createdHighScore.save()
  } catch (err) {
    const error = new HttpError(
      'Uploading quiz results to high scores failed, please try again.',
      500
    )
    return next(error)
  }
  res.status(201).json({ newHighScore: createdHighScore })
}