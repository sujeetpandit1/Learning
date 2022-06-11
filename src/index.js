const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
const ip = require('ip')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://isuzu:Arjun123@cluster0.rs68oil.mongodb.net/day20", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use (
    function (req, res, next) {
        console.log ("inside GLOBAL MW");

        let d =new Date();
        console.log(d);
        const cip=ip.address()
        console.log(cip)
        next();
  }
  );

app.use('/', route);


app.listen(process.env.PORT || 8000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 8000))
});
