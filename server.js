const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const {MongoClient} = require('mongodb');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let db;
MongoClient.connect("mongodb:sents:'Bronc12!'@ds251819.mlab.com:51819/aleku399", (err, database) => {
  if (err) return console.log(err);
  db = database
  app.listen(3000, () => {
    console.log('listening on 3000');
  });
});


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
const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
