//lines 1-9 are needed in order to use express, body-parser, mongoose, and to connect to modules(js files)/localhost
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/E-commerce');
var Product = require('./model/product');

var wishList = require('./model/wishlist')


//Parse means to interpret data
app.use(bodyParser.json());//tells the system you want json to be used.
app.use(bodyParser.urlencoded({extended:false}));// tells the system you want a simple algorithm for  shallow parsing by using false



app.post('/product', function(request, response){
   var product = new Product();
    product.title = request.body.title;
    product.price = request.body.price;
    product.save(function(err, savedProduct){
       if(err){
           response.status(500).send({error:"Could not save product"});
       } else{
           response.send(savedProduct);
       }
    });
   
});

app.listen(3000, function(){
    console.log("E-commerce api running on port 3000...");
});


