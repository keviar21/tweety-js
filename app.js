const express = require( 'express' );
const app = express();
const nunjucks = require('nunjucks');
const routes = require('./routes');
//const https = require("https");
//const http = require("http");

app.use(express.static('public'))
app.use('/', routes);

app.set('view engine', 'html'); // hace que res.render funcione con archivos html
app.engine('html', nunjucks.render); // cuando le den archivos html a res.render, va a usar nunjucks
nunjucks.configure("views", {
    autoescape: true,
    noCache: true,
    express: app
});

//http.createServer(app).listen(80);
//https.createServer(app).listen(443);

/*app.get("/", function(req, res){

    res.sendFile("/stylesheets/styles.css", function(err){

        if(err){
            next(err)
        }else{
            console.log("Sent");
        }
    })
})*/

app.listen(9000, function() {
    console.log("estoy en el puerto 9000");
})