import {
  EasyHighScore,
  MediumHighScore,
  HardHighScore,
} from '../models/highScoreModel.js'
import HttpError from '../models/httpError.js'

export function getHighScoresCollection(difficulty) {
  let HighScoreCollection
  if (difficulty === 'easy') {
    HighScoreCollection = EasyHighScore
  }
  if (difficulty === 'medium') {
    HighScoreCollection = MediumHighScore
  }
  if (difficulty === 'hard') {
    HighScoreCollection = HardHighScore
  }
  return HighScoreCollection
}

export async function fetchHighScoresData(HighScoreCollection, fetchingType) {
  let highScores

  try {
    highScores = fetchingType(HighScoreCollection)
  } catch (err) {
    throw new HttpError(
      'Something went wrong, could not find the high score data.',
      500
    )
  }

  if (!highScores) {
    throw new HttpError(
      'Could not find high score data, please try again.',
      404
    )
  }
  return highScores
}
