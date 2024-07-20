import { HighScoreEntry } from './models/high-score-model'
import HttpError from './models/http-error'

export const getHighScoreData = async (req, res, next) => {}

export const createHighScoreEntry = async (req, res, next) => {
  const createdHighScoreEntry = new HighScoreEntry({
    userName: req.body.userName,
    correctAnswers: req.body.correctAnswers,
    duration: req.body.duration,
    category: req.body.category,
    difficulty: req.body.difficulty,
  })
  try {
    await createdHighScoreEntry.save()
  } catch (err) {
    const error = new HttpError(
      'Uploading quiz results to high scores failed, please try again.',
      500
    )
    return next(error)
  }
  res.status(201).json(createdHighScoreEntry)
}
