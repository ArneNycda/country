const fs = require('fs');
const fileName = './jsonFiles/countries.json';

function processFile(data, searchTerm) {
    const countryList = JSON.parse(data.toString());
    const countryInfo = countryList.find(country => country.name === searchTerm);
    const message = countryInfo === undefined ? 'but that country doesn\'t exist. Sad!' : `Country: ${countryInfo.name}\nTop Level Domain: ${countryInfo.topLevelDomain}`;

    console.log(`\nYou asked for ${searchTerm}...\n${message}\n`);
}

fs.readFile(fileName, (err, data) => {
    if (err) {
        throw err;
        return;
    }

    processFile(data, process.argv[2]);
});
