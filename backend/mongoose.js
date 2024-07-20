import mongoose from 'mongoose'
import { HighScoreData } from './models/highscore-model'

mongoose
  .connect('DUMMY_CONNECTION_STRING')
  .then(() => console.log('Connected to database.'))
  .catch(() => console.log('Connection to database failed.'))

export const createHighScoreEntry = async (req, res, next) => {
  const highScoreEntry = new HighScoreData({
    userName: req.body.userName,
    correctAnswers: req.body.correctAnswers,
    duration: req.body.duration,
    category: req.body.category,
    difficulty: req.body.difficulty,
  })
  const result = await highScoreEntry.save()
  res.json(result)
}
