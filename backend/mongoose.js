import { HighScoreData } from './models/highscore-model'

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
