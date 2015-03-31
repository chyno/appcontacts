module.exports = function() {
    var service = {
        init: init,
        logErrors: logErrors
    };
    return service;

    function init(err, req, res, next) {
        var status = err.statusCode || 500;
        if (err.message) {
            res.send(status, err.message);
        } else {
            res.send(status, err);
        }
        next();
    }

    /* Our fall through error logger and errorHandler  */
    function logErrors(err, req, res, next) {
        var status = err.statusCode || 500;
        console.error(status + ' ' + (err.message ? err.message : err));
        if (err.stack) {
            console.error(err.stack);
        }
        next(err);
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJyb3V0ZXMvdXRpbHMvZXJyb3JIYW5kbGVyLmpzIl0sImZpbGUiOiJyb3V0ZXMvdXRpbHMvZXJyb3JIYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=