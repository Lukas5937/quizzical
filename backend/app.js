import express from 'express'
import mongoose from 'mongoose'
import quizRoutes from './routes/quizRoutes.js'
import highScoreRoutes from './routes/highScoreRoutes.js'

const app = express()
const PORT = 4000

app.use(express.json())

app.use('/quiz', quizRoutes)

app.use('/high-scores', highScoreRoutes)

// the connection string needs a password and the collection name (high-scores)

mongoose
  .connect('DUMMY_CONNECTION_STRING')
  .then(() => {
    console.log('Connected to database.')
    app.listen(PORT, (err) => {
      if (err) console.log('Error in server setup')
      console.log(`Server listening on Port ${PORT}`)
    })
  })
  .catch(() => console.log('Connection to database failed.'))
