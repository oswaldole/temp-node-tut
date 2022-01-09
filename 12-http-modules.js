const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Welcome to our home page");
    }
    if (req.url === "/about") {
        res.end("here is our short history");
    }
    res.end(`<h1>Ooops!</h1>
    <p>No se encuentra la pagina</p>`);
});

server.listen(5000);