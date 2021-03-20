require('dotenv').config()

const server = require('./routes/server');
const authserver = require('./routes/authserver');
const express = require('express');
const app = express();

app.use(express.json());
app.use('/', server);
app.use('/', authserver);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));


// require('crypto').randomBytes(64).toString('hex')

// 'fdaa1a50f332af62507e80dc1d91269c24b507d4a8f1a44b55a299728d0e71401ae07dbc3600d950ac31e17ef4557e1d3622f7debc2e890ff9aa864f2bef1f42'
// 'cbdd17a3cd3a0533c6c01a6e390b5ba4a4711a08af3aa7450d129a879c989003b828d74193b76df016cb519ba10d52b6551d66c56c406d1cdf6c8566cd2f73c5'