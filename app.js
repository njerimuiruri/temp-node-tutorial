const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Hello , this is my firts node js')
    }
    if (req.url === '/about') {
        res.end(' here is our short history')
    }
    res.end(`
   <h1>OOOPS!</h1>
  <P>We cant see the page you are looking for <a href="/">Back home</a></P>
   `)

})

server.listen(5000);

