

module.exports = function(app) {
    var api = '/api';
    var data = '/../../data/';
    var jsonfileservice = require('./utils/jsonfileservice')();
    var YQL = require('yql');

    app.get(api + '/customer/:id', getCustomer);
    app.get(api + '/customers', getCustomers);
	
	app.get(api + '/reading/:id', getReading);
	app.get(api + '/readings', getReadings);
	app.get(api + '/zips', getZips);
//http://www.myweather2.com/developer/weather.ashx?uac=EzHcG2MGR.&uref=68eab41a-a3e3-4055-8c46-951153f40451&temp_unit=f&wind_unit=kph
    var zips = [
      {
      	id : 1,
      	zip: 22207,
      	description : 'Arlington'
      },
      {
      	id :2,
      	zip : 19806,
      	description : 'Wilmington'
      }
    ];

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
		 
		var zip = zips.filter(function (c) {
			return c.id === parseInt(req.params.id);
		});
		res.send(zip[0]);
	}
	
	function getReadings(req, res, next) {
		
		var query = new YQL('select * from weather.forecast where (location = 22207)');
 
		query.exec(function(err, data) {
		  var location = data.query.results.channel.location;
		 // var condition = data.query.results.channel.item.condition;
		   var wind = data.query.results.channel.wind;
		   res.send([{speed: wind.speed, direction: wind.direction, zip:'22207'}])
		  //console.log('The current weather in ' + location.city + ', ' + location.region + ' is ' + condition.temp + ' degrees.');
		});

		//var json = jsonfileservice.getJsonFromFile(data + 'readings.json');
		//res.send(json);
	}

	function getZips(req, res, next) {
		res.send(zips);
	}
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJyb3V0ZXMvaW5kZXguanMiXSwiZmlsZSI6InJvdXRlcy9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9