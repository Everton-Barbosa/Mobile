var express = require('express'),
path = require('path'),
bodyParser = require('body-parser'),
cors = require('cors'),
mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://EvertonBarbosa:omP8efCWexcXoxp7@mimo2.kclwwuy.mongodb.net/?retryWrites=true&w=majority&appName=mimo2', { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)});

const companyRoute = require('./routes/company.route');
var app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/user', companyRoute);
app.get('/', function(req, res){
   res.send("Hello World!");
});

app.listen(3000,function(){
    console.log('Listening on port 3000!');
});