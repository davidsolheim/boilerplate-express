var express = require('express');
var app = express();
console.log("Hello World");
/*app.get("/", (req, res) => {
  res.send("Hello Express");
});*/
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});
app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
  res.json({
    message: "Hello json"
  });
});































 module.exports = app;
