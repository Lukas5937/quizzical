import express from 'express'
import mongoose from 'mongoose'
import HttpError from './models/httpError.js'
import quizRoutes from './routes/quizRoutes.js'
import highScoresRoutes from './routes/highScoresRoutes.js'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = 4000

app.use(express.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  )
  next()
})

app.use('/api/v1/quiz', quizRoutes)
app.use('/api/v1/high-scores', highScoresRoutes)

app.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404)
  return next(error)
})

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error)
  }
  res.status(error.code || 500)
  res.json({ message: error.message || 'An unknown error occurred.' })
})

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('Connected to database.')
    app.listen(PORT, (err) => {
      if (err) console.log('Error in server setup')
      console.log(`Server listening on Port ${PORT}`)
    })
  })
  .catch(() => console.log('Connection to database failed.'))
