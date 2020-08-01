const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

// Define paths for express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
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
    name: "James Bond",
  });
});

app.get("/weather", (req, res) => {
  res.send({
    forecast: "Partly Cloudly",
    location: "Philedelhpia",
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
      title:'404',
      name: "Shoptar",
      errMsg: "Help Article Not Found",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title:'404',
    name: "Shoptar",
    errMsg: "Page Not Found",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
