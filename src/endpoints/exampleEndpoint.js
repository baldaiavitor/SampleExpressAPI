const dataAdapter = require('../common/dataAdapter.js');

function handleRequest(request, response){
    let requestData = dataAdapter.requestToJson(request);

    //Echo Test
    response.send(requestData);
    response.end();
}

exports.handleRequest = handleRequest;
exports.method = "POST"; //または”GET”
