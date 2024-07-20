import mongoose from 'mongoose'

const Schema = mongoose.Schema

const highScoreEntrySchema = new Schema({
  userName: { type: String, required: true },
  correctAnswers: { type: Number, required: true },
  duration: { type: Number, required: true },
  category: { type: String, required: true },
  difficulty: { type: String, required: true },
  date: { type: String, required: true },
})

export const HighScoreEntry = mongoose.model(
  'highScoreEntry',
  highScoreEntrySchema
)
