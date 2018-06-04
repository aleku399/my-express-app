const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const books = require('./routes/api/books');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const dbURI = "mongodb://aleku:namatovu2017@ds123331.mlab.com:23331/example"
mongoose.connect(dbURI).then(() => console.log(`MongoDB connected`)).catch(err => console.log(err));


app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, './src') });
});
app.get('/process_get', (req, res) => {
  const response = {
    password1: req.query.password1,
    password2: req.query.password2,
  };
  console.log(response);
  res.end(JSON.stringify(response));
});
app.get('/form', (req, res) => {
  res.sendFile('form.html', { root: path.join(__dirname, './src') });
});
app.post('/quotes', (req, res) => {
  const response = {
    name: req.query.name,
    quote: req.query.quote,
  };
  res.end(JSON.stringify(response));
});
app.use('/api/books', books);
const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
