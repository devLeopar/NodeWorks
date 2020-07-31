const http = require("http");

const url =
  "http://api.weatherstack.com/current?access_key=c41d9e94d03f9473b0fb165f285294df&query=40,-75&units=f&units=f";

const request = http.request(url, (response) => {
  let data = "";

  response.on("data", (chunk) => {
    data = data + chunk.toString();
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (error) => {
    console.log('An error', error)
});

request.end();
