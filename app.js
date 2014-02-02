var express = require("express");
var ejs = require("ejs");
var app = express();

app.use(express.logger());
app.use('/static', express.static(__dirname + '/public'));
app.engine('html', ejs.renderFile);

app.get('/', function(req, res) {
  res.render('index.html', { });
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
    console.log("Listening on " + port);
});
