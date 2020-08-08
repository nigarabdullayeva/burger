const express = require ("express");
const exphds = require("express-handlebars");

const app = express();

let PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");






app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });