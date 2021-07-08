const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();

const port = 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(expressLayouts);

const init = () => {
	app.listen(port);
	console.log(`http://localhost:${port}`);
};

app.get('/', (req, res) => {
  res.render('home', {
    layout: 'layout',
    title: 'Home',
    });
});

init();
