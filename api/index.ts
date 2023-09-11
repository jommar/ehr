import express from 'express'
import routes from './routes/v1/index'

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/v1', routes)

app.listen(port, () => {
  console.log(`Bun server is running on http://localhost:${port}`)
})
