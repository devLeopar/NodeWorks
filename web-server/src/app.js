const path = require("path");
const express = require("express");

const app = express();
const publicDirectoryPath = path.join(__dirname, "../public");
// const aboutDirectoryPath = path.join(__dirname, "../public/about.html");
// const helpDirectoryPath = path.join(__dirname, "../public/help.html");

app.use(express.static(publicDirectoryPath));



app.get("/weather", (req, res) => {
  res.send({
    forecast: "Partly Cloudly",
    location: "Philedelhpia",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
