const express = require( 'express' );
const app = express();

/*app.use(function(req,res,next) {

});*/

app.listen(8080, function() {
    console.log("estoy en el puerto 8080");
})

app.get('/', function(req, res) {
    res.send('GET request for homepage');
});

app.get('/special*',function(req,res) {
    res.send('estas en una parte especial');
});

app.post('/postea',function(req,res) {
    res.post('POST request for homepage');
});
  