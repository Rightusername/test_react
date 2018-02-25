var express = require('express');
var app = express();
var bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/studio.json');
})

app.listen(3000, function () {
    console.log('listen on 3000');
});