const http = require('http');
const fs = require('fs');
const path = require('path');

// Função para servir os arquivos estáticos (HTML, CSS, JS).
function serveStaticFile(response, filePath) {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            response.writeHead(500, { 'Content-Type': 'text/plain'});
            response.end('Erro interno do servidor.');
        } else {
            const ext = path.extname(filePath);
            const contentType = getContentType(ext);
            response.writeHead(200, { 'Content-Type': contentType});
            response.end(data);
        }

    });
}

// Função para obter o tipo de conteúdo com base na estensão do arquivo.
function getContentType(ext) {
    switch (ext) {
        case '.html':
            return 'text/html';
        case '.css':
            return 'text/css';
        case '.js':
            return 'text/javascript';
        default:
            return 'text/plain';
    }
}

// Criação do servidor HTTP.
const server = http.createServer((request, response) => {
    let filePath = '.' + request.url;
    if (filePath === './'){
        filePath = './index.html';
    }

    serveStaticFile(response, filePath);
});

// Definindo a porta em que o servidor irá ouvir (por exemplo, 3000).
const port = 3000;

// Iniciando o servidor.
server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});