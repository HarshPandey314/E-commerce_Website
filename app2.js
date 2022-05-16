const express = require('express');
const fs = require('fs');
const path = require('path');
// const alert = require('alert');
const app = express();
const port = 3000;

// app.use(express.static('/static',static))
app.use('/static', express.static('static'))
app.use(express.urlencoded());

app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))

app.get('/',(req,res)=>{
    const params = {}
    res.status(200).render('firstPage.pug',params)
})



app.listen(port,()=>{
    console.log(`The application started Successfully on port ${port}`)
})



