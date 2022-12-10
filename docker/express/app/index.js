const express = require('express');
const os = require('os');
const { faker } = require('@faker-js/faker');
const path = require('path');

const port = process.env.PORT || 1337;
const app = express();

app.use(express.json());

app.get('/account', (req, res) => {
    res.send({
        userName: faker.internet.userName(),
        accountName: faker.finance.accountName(),
        ethAddress: faker.finance.ethereumAddress(),
    });
});

app.get('/ajax', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});

app.get('/hostname', (req, res) => {
    res.send({
        hostname: os.hostname()
    });
});

app.get('*', (req, res) => {
    res.sendStatus(404);
});

app.listen(port, () => {
	console.log(`Server » Ready on port ${port}.`);
});