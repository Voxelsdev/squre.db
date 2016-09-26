const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, 'data.json');
const experess = require('express');
const app = express();
const port = process.env.PORT || 8000;

const morgan = require('morgan');
const bodyParse = require('body-parser');

app.disable('x-powered-by');
