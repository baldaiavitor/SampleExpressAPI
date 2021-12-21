//.envファイル読み込み
require('dotenv').config();

//#region "変数と定数の宣言"
const express = require('express');
const server = express();
const endpoints = require('./endpoints');
const PORT = process.env.SERVER_PORT;
//#endregion "変数と定数の宣言"

//Body解析
server.use(express.json());

//#region "APIテストページ"
server.use('/test', express.static(__dirname + '/testPage'));
server.get('/test', function (req, res) {
    res.sendFile('/testPage/index.html', { root: __dirname });
});

server.get('/endpoints', function (req, res) {
    let endpoints = [];
    server._router.stack.forEach(function (r) {
        if (r.route && r.route.path && r.route.path != "/" && r.route.path != "/endpoints" && r.route.path != "/test") {
            endpoints.push(r.route.path);
        }
    })
    res.send(endpoints);
    res.end();
});
//#endregion "Test Page"

//別途JSファイルでEndpoints宣言
endpoints.declareEndpoints(server);

//Expressサーバー開始
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});