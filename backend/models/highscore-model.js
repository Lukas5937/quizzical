import mongoose from 'mongoose'

const highScoreDataSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  correctAnswers: { type: Number, required: true },
  duration: { type: Number, required: true },
  category: { type: String, required: true },
  difficulty: { type: String, required: true },
})

export const HighScoreData = mongoose.model(
  'highScoreData',
  highScoreDataSchema
)
