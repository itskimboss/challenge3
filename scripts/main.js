function getAPIdata() {
	var request= 'https://api.nasa.gov/planetary/earth/imagery/?lon=100.75&lat=1.5&date=2014-02-01&cloud_score=True&api_key=gJXHfOdpcd8lYwLgSjlyJutfKSXo3bj55ZiSo8e6';
	fetch(request)

	.then(function(response) {
			if(!response.ok) throw Error(response.statusText);
			return response.json();
	})

	// render weather per day
	.then(function(response) {
		console.log(response[0]);
		document.getElementById('earth').src=response.url;

		//console.log('https://epic.gsfc.nasa.gov/'+ response[0].image +'.jpg');


		// render weatherCondition
		//onAPISucces(response);
	})
	
	// catch error
	.catch(function (error) {
		// onAPIError();
		console.error('Request failed', error);
	});
}

getAPIdata();


function getWeather() {

	var url = "https://api.openweathermap.org/data/2.5/weather";
	var apiKey ="b0c8dafa512a0134e90df6ece3c2b7a2";
	var city = "the%20Hague,nl";

	// construct request
	var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city;
	
	// get current weather
	fetch(request)
	
	// parse to JSON format
	.then(function(response) {
		if(!response.ok) throw Error(response.statusText);
		return response.json();
	})
	
	// render weather per day
	.then(function(response) {
		// render weatherCondition
		onAPISucces(response);	
	})
	
	// catch error
	.catch(function (error) {
		onAPIError(error);
	});
}


function onAPISucces(response) {
	// get type of weather in string format
	var type = response.weather[0].description;

	// get temperature in Celcius
	var degC = Math.floor(response.main.temp - 273.15);

	// render weather in DOM
	var weatherBox = document.getElementById('weather');
	weatherBox.innerHTML = degC + "&#176;C <br>" + type;
}


function onAPIError(error) {
	console.error('Request failed', error);
	var weatherBox = document.getElementById('weather');
	weatherBox.className = 'hidden'; 
}

// init data stream
getWeather();


function energy() {
	var request= 'https://thereportoftheweek-api.herokuapp.com/reports';

	fetch(request)

	.then(function(response) {
		return response.json();
	})

	.then(function(response) {
		console.log(response);

		for(var i = 0; i < 10; i++) {
			document.getElementById('energy').innerHTML += response[i].product + '<br>';
		}
		//document.getElementById('restaurants');
	})
	
	// catch error
	.catch(function (error) {
		// onAPIError();
		console.error('Request failed', error);
	});
}
energy();
