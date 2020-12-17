const http = require('http');

const server = http.createServer((req, resp) => {
    console.log("Request Made.")
});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
})