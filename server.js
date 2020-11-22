const express = require('express');
const app = express();
var body_parser = require('body-parser');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./model/user.js');

//middleware setting
app.set('view engine', 'ejs');
app.set('views', './views');
app.engine('html', require('ejs').renderFile);

//Routing
app.get('/', (req,res) => {
	//res.send('Hello World!');
	res.render('main.ejs');
})

app.get('/animal', (req,res) => {
	if(req.query.name !== 'cat' && req.query.name !== 'dog'){
		res.end('No such animal exists!');
		return;
	}
	res.render('${req.query.name}.html')
})

app.get('')
const server = app.listen(8000,()=> {
	console.log("Server running at http://localhost:8000/");
})