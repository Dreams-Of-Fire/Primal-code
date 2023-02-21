const http = require("http");

const host = "localhost"

// констатнтой порта может быть значение либо в 3000 либо в 8000
const port = "8000"

const requestListener = function (req, res) {
    res,writeHead(200);
    res,and("Hello, server working well!");
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Сервер запущен на http://${host}:${port}`)
})