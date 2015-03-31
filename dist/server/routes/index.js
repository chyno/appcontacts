module.exports = function(app) {
    var api = '/api';
    var data = '/../../data/';
    var jsonfileservice = require('./utils/jsonfileservice')();

    app.get(api + '/customer/:id', getCustomer);
    app.get(api + '/customers', getCustomers);

    function getCustomer(req, res, next) {
        var json = jsonfileservice.getJsonFromFile(data + 'customers.json');
        var customer = json.filter(function(c) {
            return c.id === parseInt(req.params.id);
        });
        res.send(customer[0]);
    }

    function getCustomers(req, res, next) {
        var json = jsonfileservice.getJsonFromFile(data + 'customers.json');
        res.send(json);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJyb3V0ZXMvaW5kZXguanMiXSwiZmlsZSI6InJvdXRlcy9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9