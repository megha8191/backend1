# backend1

## HTTPS  
### Methods
-Get : read
-Put :Update
-Post: Submit
-Delete: Remove
which one os idemppotent?

HTTPS-->link--->Domain name resolution--->IP Address,port

TCP>> 3 way handshake

## Express.js
Server side app 
web framework for Node.js

## Steps 
- Initialize project with  "npm init -y"
- Insatall express.js  "npm i express"
- Create a file "server.js" 

### server.js
const express = require('express')
const app = express()
const port = 3000
app.listen(port, () => {
    console.log(`Server started at port ${port}`)
 })

- Run code "node server.js" to run code
- Get request
app.get('/', (req, res) => {
  res.send('Hello World!')
})

- Other Request (Post)
app.post('/', (req, res) => {
  res.send('Got a POST request')
})

For example: 
app.post('/api/cars', (req, res) => {
    const {name,brand}= request.body;
    console.log(name);
    console.log(brand);
    res.send('Got Car data successfully.')
})

- To send this post data , you need to install postman

## Postman

New, enter url , in body , in json format:
{
    "name": "DLMGH01"
    "brand": "scorpio"
}


## Mongo DB 
- No SQL DB
- 1.  Graph
  2. Key pair values
  3. Documents
  etc
- Not relational database



homwork:
cheatsheet of express and mongo db




43....1HR...continue
