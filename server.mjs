import express from 'express'

const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/name/:username',(req, res)=>{
  const username = req.params.username
  res.json({"message" : `your welcome ${username}`})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})