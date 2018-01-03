const express = require('express');

const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function (req, res) {
  res.send('Hello world!');
});

app.get('/post', function (req, res) {
  res.render('post');
})



app.listen(3000, () => console.log('Server running at port 3000'));