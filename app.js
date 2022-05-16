const express = require('express');
const path = require('path');
const alert = require('alert');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const app = express();
const port = 3000;

app.use(express.static(__dirname));


var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

main().catch(err => console.log(err));

    async function main() {
    await mongoose.connect('mongodb://localhost:27017/website_directory');
    // console.log("Mongoose is Running");
    }

    const newSchema = new mongoose.Schema({
        name: String,
        gender: String,
        age: Number,
        address: String,
        Line1: String,
        Line2: String,
        Line3: String,
        City: String,
        State: String,
        Phone_Number:Number,
        Email: String,
    })

    const shopping_Website_model = mongoose.model('shopping_Website_model',newSchema);

app.get('/', function(req, res) {
    res.sendFile( __dirname + "/firstPage.html" );
}); 

app.post('/Details',urlencodedParser,(req,res)=>{

    const buyerInfo = new shopping_Website_model({
        name: req.body.name,
        gender: req.body.gender,
        age: req.body.age,
        address: "-",
        Line1: req.body.address1,
        Line2: req.body.address2,
        Line3: req.body.address3,
        City: req.body.address4,
        State: req.body.state,
        Phone_Number: req.body.mob,
        Email: req.body.emailId,
    })

    buyerInfo.save();
    alert('Your Details have been Saved Successfully');
    

    res.sendFile( __dirname + "/paymentMethod.html" );

})



app.listen(port);
console.log('Server started at http://localhost:' + port);