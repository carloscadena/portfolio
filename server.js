'use strict';

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

app.get('/index', function(request, response) {
  response.sendFile('public/index.html', {root: '.'})

})

app.listen(PORT, function() {
  console.log(`Your app is being served on localhost:${PORT}`)
});
