const express = require('express');
const path = require('path');
const morgan = require('morgan');

// Init
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Global Variables

// Routes
app.use('/api/providers', require('./routes/providers.routes'));
app.use('/api/specialties', require('./routes/specialties.routes'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;