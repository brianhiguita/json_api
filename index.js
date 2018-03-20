var express = require('express');
    app = express();
    port = process.env.PORT || 3000;

app.get('/', function(req, res){
    res.send("hello world");
})


app.listen(process.env.PORT, function(){
    console.log("APP IS RUNNING ON PORT " + process.env.PORT)
})