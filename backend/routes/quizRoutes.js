import express from 'express'
import { check } from 'express-validator'
import { getQuestions } from '../controllers/quizController.js'

const router = express.Router()

router.post(
  '/questions',
  [
    check('userName').isLength({ min: 3 }),
    check('category').not().isEmpty(),
    check('difficulty').not().isEmpty(),
  ],
  getQuestions
)

export default router
