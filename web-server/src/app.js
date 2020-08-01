const path = require("path");
const express = require("express");

const app = express();
const publicDirectoryPath = path.join(__dirname, "../public");
// const aboutDirectoryPath = path.join(__dirname, "../public/about.html");
// const helpDirectoryPath = path.join(__dirname, "../public/help.html");

app.set("view engine", "hbs");
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Andrew Mead",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "Cengiz",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    msg: "How can i help you?",
    title: "Help Page",
  });
});

app.get("/weather", (req, res) => {
  res.send({
    forecast: "Partly Cloudly",
    location: "Philedelhpia",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
