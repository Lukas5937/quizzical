import express from 'express'
import {
  createNewHighScore,
  getHighScores,
} from '../controllers/high-score-controller.js'

const router = express.Router()

router.post('/new', createNewHighScore)

router.get('/', getHighScores)

export default router
