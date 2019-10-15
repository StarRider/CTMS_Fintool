const express        =         require("express");
const bodyParser     =         require("body-parser");
const router  = require('./routes/routing');
const cors = require("cors")
const app            =         express();

app.use(cors())
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', router);

app.listen(1050);
console.log("Server listening in port 1050")

