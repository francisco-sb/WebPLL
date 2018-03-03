var express = require('express');
var app = express();
var path = require('path');

app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function(request, response) {
  response.render("index");
});

app.listen(8080);
