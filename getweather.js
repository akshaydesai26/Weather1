var request=require("request");
var http=require("http");



var city='Mumbai';
var url='http://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=5cae0de9d707502e258bb40c1d8ceee9';

request({
    url: url,
    json:true
}, function(error,response,body){
    if(!error && response.statusCode ===200){
        cityjson=body;
        console.log(cityjson);
        //var arr=Object.entries(cityjson)
        //console.log(arr);
        //var weath= Object.entries(cityjson.weather)[0][1]
        //console.log(weath['main']);
        //var temp=Object.entries(cityjson.main)[0][1];
        //console.log(typeof temp);
        var windsp= Object.entries(cityjson.wind)[0][1];
        console.log(windsp);
        var windang= Object.entries(cityjson.wind)[1][1];
        console.log(windang);
    }
})
