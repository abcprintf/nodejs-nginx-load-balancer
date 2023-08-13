const express = require('express');
const app = express();
const port = 3001;

const name = process.env.name || 'DEV MIX';

app.get('/', (req, res) => {
    res.send(`Hello ${name}! I am app1.`);
});

app.listen(port, () => {
    console.log(`Server listening on the port ${port}`);
});