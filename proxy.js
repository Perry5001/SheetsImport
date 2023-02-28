const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSMVyT1bIeWOlazjgwn9U1gwW1uZLU2VxH-IdCjOOvKOP5tGSwg3g08IUYM-ubYAUibfskKxaDbjnZY/pub?gid=1477902381&single=true&output=csv"
const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.get('/data.csv', (req, res) => {
  fetch(url)
    .then(response => response.text())
    .then(data => {
      res.send(data);
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('Internal Server Error');
    });
});

app.listen(3000, () => {
  console.log('Proxy server listening on port 3000');
});
