const express = require('express');
var bodyParser=require('body-parser');
var request=require("request");


var app = express();
app.set('view engine','ejs');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',function(req,res){
    res.send('welcome to weather app');
});

app.get('/find',function(req,res){
    //res.send('enter name of city to find');
    res.render('city');
});

app.post('/find',function(req,res){
    console.log(req.body);
    //res.send(req.body.city);
    //module.exports.city=req.body.city;
    //module.exports.city='Mumbai';
    var city=req.body.city;
    var url='http://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=5cae0de9d707502e258bb40c1d8ceee9';

request({
    url: url,
    json:true
}, function(error,response,body){
    if(!error && response.statusCode ===200){
        cityjson=body;
        var weath= Object.entries(cityjson.weather)[0][1]
        console.log(weath['main']);
        var temp=Object.entries(cityjson.main)[0][1]-273.00;
        var temp=Math.round(temp);
        console.log(temp);
        var windsp= Object.entries(cityjson.wind)[0][1];
        console.log(windsp);
        var windang= Object.entries(cityjson.wind)[1][1];
        console.log(windang);
        var windlength=(windsp/10)*100;
        
        res.render('weatherinfo',{
            weath: weath['main'],
            temp: temp,
            windsp: windsp,
            windang: windang,
            windlength: windlength

        });
    }
})
});





app.listen(3000);
console.log('server running');