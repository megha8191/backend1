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
