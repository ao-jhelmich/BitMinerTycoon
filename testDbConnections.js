var mongoose 	 = require('mongoose');
var database	 = require('./config/database'); 
var dbconnection =  mongoose.connect(database.url);    
	console.log(dbconnection);


