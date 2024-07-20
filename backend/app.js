import express from 'express'
import quizRoutes from './routes/quizRoutes.js'
import { createHighScoreEntry } from './mongoose.js'

const app = express()
const PORT = 4000

app.use(express.json())

app.use('/quiz', quizRoutes)

app.post('/products', createHighScoreEntry)

app.listen(PORT, (err) => {
  if (err) console.log('Error in server setup')
  console.log(`Server listening on Port ${PORT}`)
})
