import { validationResult } from 'express-validator'
import {
  getHighScoresCollection,
  fetchHighScoresData,
} from '../util/fetchHighScoresData.js'
import HttpError from '../models/http-error.js'

async function sortedFetching(collection) {
  return await collection.find().sort({
    correctAnswers: -1,
    duration: 1,
  })
}

async function unsortedFetching(collection) {
  return await collection.find()
}

export const createNewHighScore = async (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    console.log(errors)
    const error = new HttpError(
      'Invalid quiz results data passed, please try again.',
      422
    )
    return next(error)
  }

  const { userName, correctAnswers, duration, category, difficulty, date } =
    req.body

  const HighScoreCollection = getHighScoresCollection(difficulty)

  const highScores = await fetchHighScoresData(
    HighScoreCollection,
    sortedFetching
  )

  function checkIsHighScore(highScores, correctAnswers, duration) {
    const isShortList = highScores.length < 10

    const isBetterScore =
      correctAnswers > highScores[highScores.length - 1]?.correctAnswers

    const isShorterDuration =
      correctAnswers === highScores[highScores.length - 1]?.correctAnswers &&
      duration < highScores[highScores.length - 1]?.duration

    return isShortList || isBetterScore || isShorterDuration
  }

  const isHighScore = checkIsHighScore(highScores, correctAnswers, duration)

  if (isHighScore) {
    const createdHighScore = new HighScoreCollection({
      userName,
      correctAnswers,
      duration,
      category,
      difficulty,
      date,
    })

    highScores.push(createdHighScore)

    highScores.sort((a, b) => {
      if (a.correctAnswers === b.correctAnswers) {
        return a.duration - b.duration
      }
      return b.correctAnswers - a.correctAnswers
    })

    if (highScores.length > 10) {
      highScores.splice(-1)
    }

    try {
      await HighScoreCollection.deleteMany({})
    } catch (err) {
      const error = new HttpError(
        'Something went wrong, could not delete old high scores.',
        500
      )
      return next(error)
    }

    try {
      await HighScoreCollection.insertMany(highScores)
    } catch (err) {
      const error = new HttpError(
        'Something went wrong, could not save the new high scores.',
        500
      )
      return next(error)
    }

    res.status(201).json({ highScores })
  } else {
    res.status(200).json({ highScores })
  }
}

export const getHighScores = async (req, res, next) => {
  const { difficulty } = req.query

  const HighScoreCollection = getHighScoresCollection(difficulty)
  const highScores = await fetchHighScoresData(
    HighScoreCollection,
    unsortedFetching
  )

  res.status(200).json({ highScores })
}
