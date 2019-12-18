var express = require('express'),
    app = express(),
    cors = require('cors'), //cros 
    bodyParser = require('body-parser'),
    Users = [
      {name:'Akex', age:20},
      {name:'Bob', age: 21}
    ],
    mongoose = require('mongoose'),
    mongoosePromise,
    Schema = mongoose.Schema,
    StudentSchema,
    Student
    ;
var port = process.env.PORT || 3000;
app.listen(port);
app.use(express.static(__dirname +'/public'));
// __dirname current fold address(directory path)

app.use(bodyParser.json());
app.use(cors());

//Books
Books = [
    ];
//get /users
app.get('/books', function getUsers(req, res, next){
	res.send(Books);
});

//post /users
app.post('/books', function postUser(req, res, next){
	var book = req.body;
	Books.push(book);
	res.send(Books);
});
//DELETE /book/id
app.delete('/books/:id', function deleteById(req, res, next){
	var id = req.params.id
	    index = Books.findIndex(function findById(b){
	    	return b.id == id;
	    });
	    index > -1 && Books.splice(index, 1);
	    res.send(Books);

});

//put /book
app.put('/book', function postUser(req, res, next){
	var book = req.body;
	var index = Books.findIndex(function findById(b){
		return b.id === book.id;
	});
	if(index !== -1){
		Books.splice(index, 1, book);
	}else{
		Books.push(book);
	}
	res.send(Books);
});