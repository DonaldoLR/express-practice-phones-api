require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const phoneRoutes = require('./routes/phones');
// Start a server
const app = express();

// Middleware
app.use(express.json());

app.use((req, res, next) => {
	console.log(req.path, req.method);
	next();
});

app.use('/api/phones', phoneRoutes);
// Connect to DB

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		app.listen(process.env.PORT, () => {
			console.log('Connected to DB');
		});
	})
	.catch((error) => console.log(error));
