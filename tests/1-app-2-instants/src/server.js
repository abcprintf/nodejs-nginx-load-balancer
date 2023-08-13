const express = require('express');
const app = express();
const port = 6000;

const name = process.env.name || 'DEV MIX';

app.get('/', (req, res) => {
    res.send(`Hello ${name}!`);
});

app.listen(port, () => {
    console.log(`Server listening on the port ${port}`);
});