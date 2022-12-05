const express = require('express');
const { faker } = require('@faker-js/faker');

const port = 1337;
const app = express();

app.use(express.json());

app.get('/account', (req, res) => {
    res.send({
        userName: faker.internet.userName(),
        accountName: faker.finance.accountName(),
        ethAddress: faker.finance.ethereumAddress(),
    });
});

app.get('*', (req, res) => {
    res.sendStatus(404);
});

app.listen(port, () => {
	console.log(`Server » Ready on port ${port}.`);
});