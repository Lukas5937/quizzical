import express from 'express'
import {
  createHighScoreEntry,
  getHighScoreData,
} from '../controllers/high-score-controller'

const router = express.Router()

router.get('/', getHighScoreData)
router.post('/new', createHighScoreEntry)

export default router
