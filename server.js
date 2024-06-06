const express = require('express')
const app = express()

const port = 3000
app.listen(port, () => {
    console.log(`Server started at port ${port}`)
 })

 app.get('/', (req, res) => {
    res.send('Hello !')
  })
  
  app.post('/api/cars', (req, res) => {
    const {name,brand}= request.body;
    console.log(name);
    console.log(brand);
    res.send('Got Car data successfully.')
})

// app.post('/api/cars', (req, res) => {
//   const {name,brand}= request.body;
//   console.log(name);
//   console.log(brand);
//   res.send('Got Car data successfully.')
// })