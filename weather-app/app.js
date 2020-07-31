const request = require("request");

// const url =
//   "http://api.weatherstack.com/current?access_key=c41d9e94d03f9473b0fb165f285294df&query=37.8267,-122.4233&units=f";

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to weather service!");
//   } else if (response.body.error) {
//     console.log("Unable to find location!");
//   } else {
//     console.log(
//       response.body.current.weather_descriptions[0] +
//         ". It is currently " +
//         response.body.current.temperature +
//         " degrees out. It feels like " +
//         response.body.current.feelslike +
//         " degrees out."
//     );
//   }
// });

const geocodeURL =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=pk.eyJ1Ijoibm9kaW5nanMiLCJhIjoiY2tkYTJmMWIwMTl1cTJxc2M0YnI2ZzMzZiJ9.nHa-y0659iO_oSttnaeiWg&limit=1";

request({ url: geocodeURL, json: true }, (error, response) => {
  if (error) {
      console.log('Unable to connect to location services!')
  }else if(response.body.features.length === 0){
    console.log('Unable to find location. Try another search')
  } 
  
  else {
    const latitude = response.body.features[0].center[1];
    const longtitude = response.body.features[0].center[0];
    console.log(latitude, longtitude);
  }
});
