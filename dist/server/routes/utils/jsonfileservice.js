    module.exports = function() {
    var service = {
        getJsonFromFile: getJsonFromFile
    };
    return service;

    function getJsonFromFile(file) {
        var fs = require('fs');
        var json = getConfig(file);
        return json;

        function readJsonFileSync(filepath, encoding) {
            if (typeof (encoding) === 'undefined') {
                encoding = 'utf8';
            }
            var file = fs.readFileSync(filepath, encoding);
            return JSON.parse(file);
        }

        function getConfig(file) {
            var filepath = __dirname + file;
            return readJsonFileSync(filepath);
        }
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJyb3V0ZXMvdXRpbHMvanNvbmZpbGVzZXJ2aWNlLmpzIl0sImZpbGUiOiJyb3V0ZXMvdXRpbHMvanNvbmZpbGVzZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=