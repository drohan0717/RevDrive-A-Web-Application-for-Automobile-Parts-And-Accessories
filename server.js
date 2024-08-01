const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

// Import Controllers
const userController = require('./Controllers/userController');
const componentController = require('./Controllers/componentController');
const purchaseController = require('./Controllers/purchaseController');

// Database Connection
mongoose.connect('mongodb://localhost:27017/rdcustomsdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Middleware
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get('/home', (req, res) => res.render('home'));
app.get('/login', (req, res) => res.render('login'));
app.get('/register', (req, res) => res.render('register'));
app.get('/components', (req, res) => res.render('component'));

// User Routes
app.post('/register', userController.register);
app.post('/login', userController.login);

// Component Routes
app.get('/ecuList', (req, res) => componentController.getComponentsByCategory(req, res, "ECU"));
app.get('/turboList', (req, res) => componentController.getComponentsByCategory(req, res, "TURBO"));
// Repeat for other categories...

// Purchase Routes
app.post('/link', purchaseController.addPurchase);
app.get('/cart', purchaseController.viewCart);
app.post('/cart', purchaseController.clearCart);

app.get('/thankyou', (req, res) => res.render('thankyou'));

// Server Listening
app.listen(3000, () => {
  console.log("Server Running On Port 3000");
});
