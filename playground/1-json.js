const fs = require('fs');

const personDataBuffer = fs.readFileSync('1-JSON.json');
const personDataJSON = personDataBuffer.toString();
const personData = JSON.parse(personDataJSON);



personData.name = 'James';
personData.planet = 'Moon';
personData.age = 32;

const personJSON = JSON.stringify(personData);
fs.writeFileSync('1-JSON.json',personJSON);