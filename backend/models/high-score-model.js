import mongoose from 'mongoose'

const Schema = mongoose.Schema

const highScoreSchema = new Schema({
  userName: { type: String, required: true },
  correctAnswers: { type: Number, required: true },
  duration: { type: Number, required: true },
  category: { type: String, required: true },
  difficulty: { type: String, required: true },
  date: { type: String, required: true },
})

export const HighScore = mongoose.model('highScore', highScoreSchema)
