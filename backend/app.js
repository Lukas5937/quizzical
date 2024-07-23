import express from 'express'
import mongoose from 'mongoose'
import quizRoutes from './routes/quizRoutes.js'
import highScoreRoutes from './routes/highScoreRoutes.js'

const app = express()
const PORT = 4000

app.use(express.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type'
  )
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE')
  next()
})

app.use('/quiz', quizRoutes)

app.use('/high-scores', highScoreRoutes)

mongoose
  .connect(
    'mongodb+srv://lukasreich:qGC9S8QMFRrBVtu9@cluster0.2fkgv2w.mongodb.net/highScores?retryWrites=true&w=majority&appName=Cluster0'
  )
  .then(() => {
    console.log('Connected to database.')
    app.listen(PORT, (err) => {
      if (err) console.log('Error in server setup')
      console.log(`Server listening on Port ${PORT}`)
    })
  })
  .catch(() => console.log('Connection to database failed.'))
