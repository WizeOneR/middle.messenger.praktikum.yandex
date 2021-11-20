const express = require('express');

const app = express();
const PORT = 4000;

app.use(express.static(`${__dirname}/dist/`));

app.listen(PORT, function () {
    console.log(`App running on port ${PORT}!`);
});