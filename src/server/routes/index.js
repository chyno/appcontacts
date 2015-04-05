module.exports = function(app) {
    var api = '/api';
    var data = '/../../data/';
    var jsonfileservice = require('./utils/jsonfileservice')();

    app.get(api + '/customer/:id', getCustomer);
    app.get(api + '/customers', getCustomers);
	
	app.get(api + '/reading/:id', getReading);
	app.get(api + '/readings', getReadings);

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

	function getReading(req, res, next) {
		var json = jsonfileservice.getJsonFromFile(data + 'readings.json');
		var reading = json.filter(function (c) {
			return c.id === parseInt(req.params.id);
		});
		res.send(customer[0]);
	}
	
	function getReadings(req, res, next) {
		var json = jsonfileservice.getJsonFromFile(data + 'readings.json');
		res.send(json);
	}
};