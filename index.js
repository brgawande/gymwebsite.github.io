const express = require("express");
const routes = require("./controllers/routes");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const uri = require("./config/mongoURI");
const app = express();
const path = require("path");

// app.use(express.urlencoded({ extended : true }));
// app.use(express.json());



app.use(express.json());
app.use(express.urlencoded({ extended : false }));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use("/static", express.static(path.join(__dirname + '/static')));

// connect to mongodb atlas
mongoose.connect(uri, { useNewUrlParser : true, useUnifiedTopology : true, }).then(() => console.log("Connected"));

app.use(routes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log("Started on PORT : " + PORT));