const express = require( 'express' );
const app = express();
const nunjucks = require('nunjucks');
const routes = require('./routes');
const https = require("https");
const http = require("http");
app.use(express.static('public'))
app.use('/', routes);

app.set('view engine', 'html'); // hace que res.render funcione con archivos html
app.engine('html', nunjucks.render); // cuando le den archivos html a res.render, va a usar nunjucks
//nunjucks.configure('views');
nunjucks.configure('views', {noCache: true});



app.use(function(req,res,next) {

});

app.listen(8080, function() {
    console.log("estoy en el puerto 8080");
})

app.get('/', function(req, res) {
    res.send('GET request for homepage');
});

app.get('/special*',function(req,res) {
    const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
    res.render( 'index', {title: 'Hall of Fame', people: people} );
});

app.post('/postea',function(req,res) {
    res.post('POST request for homepage');
});



/*var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};
nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', locals, function (err, output) {
    console.log(output);
});*/
  