const express = require ("express"); 
const app = express();
const PORT = process.env.PORT || 8080;

// Need to require handlebars 
const exphbs = require('express-handlebars');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));

app.set('view engine', 'handlebars');

const routes = require('./controllers/burgers_controller.js')

app.use(routes);

app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);