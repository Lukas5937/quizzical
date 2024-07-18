import express from 'express'

const app = express()
const PORT = 4000

app.use(express.json())

app.listen(PORT, (err) => {
  if (err) console.log('Error in server setup')
  console.log(`Server listening on Port ${PORT}`)
})
