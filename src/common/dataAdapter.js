exports.requestToJson = function (expressRequest) {
    if (expressRequest.method) {
        switch (String(expressRequest.method).toLocaleLowerCase()) {
            case "post":
                return expressRequest.body;
            case "get":
                return expressRequest.query;

            default:
                return undefined;
        }
    }
    return undefined;
}