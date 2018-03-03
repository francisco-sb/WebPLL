var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);

const port = process.env.PORT || 3000;

app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function(request, response) {
  response.render("index");
});

//app.listen(8080);
server.listen(port, function()) {
  console.log('listening on *:' + port);
}
