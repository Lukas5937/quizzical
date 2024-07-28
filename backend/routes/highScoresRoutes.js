import express from 'express'
import { check } from 'express-validator'
import {
  createNewHighScore,
  getHighScores,
} from '../controllers/highScoresController.js'

const router = express.Router()

router.post(
  '/',
  [
    check('userName').not().isEmpty(),
    check('correctAnswers').not().isEmpty(),
    check('duration').not().isEmpty(),
    check('category').not().isEmpty(),
    check('difficulty').not().isEmpty(),
    check('date').not().isEmpty(),
  ],
  createNewHighScore
)

router.get('/', getHighScores)

export default router
