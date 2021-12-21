const fs = require('fs');
const path = require('path');

exports.declareEndpoints = function (server) {
    fs.readdirSync(__dirname).forEach(file => {
        if(file != 'index.js'){
            let endpoint = require(path.join(__dirname, `/${file}`));
            let enpointName = file.substring(0, file.lastIndexOf('.')) || file;

            if(endpoint.method == "POST"){
                server.post(`/${enpointName}`, function(req, res){
                    endpoint.handleRequest(req, res);
                });
                return;
            }

            if(endpoint.method == "GET"){
                server.get(`/${enpointName}`, function(req, res){
                    endpoint.handleRequest(req, res);
                });
                return;
            }
            
        }
    });
}