import express from 'express'
import { createNewHighScore } from '../controllers/high-score-controller.js'

const router = express.Router()

router.post('/new', createNewHighScore)

export default router
