var express = require('express');
var app = express();
var parseJson = require('./lib/json-file-reader/json-file-reader');
var json = require('./jsonFiles/countries.json');

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    const searchTerm = process.argv[2];
    const countryInfo = json.find(country => country.name === searchTerm);
    const show = countryInfo !== undefined;

    res.render('./index', {show: show, countryInfo: countryInfo, searchTerm: searchTerm});
});

app.listen(3000, function() {
    console.log('Country information app started on port 3000');
});
