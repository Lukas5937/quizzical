import express from 'express'
import { getQuestions } from '../controllers/quiz-controller.js'

const router = express.Router()

router.get('/questions', getQuestions)

export default router
