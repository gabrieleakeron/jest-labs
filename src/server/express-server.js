const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.get('/coverage', (req, res) => {
    res.sendFile('../../coverage/lcov-report/index.html', { root: __dirname });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});