var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping');


var products = [
    new Product({
        imagePath: 'https://m.media-amazon.com/images/M/MV5BZGFiMDYxOTQtZmRkYy00YjU4LTgwY2QtYzA0YzkzNWQyODkyXkEyXkFqcGdeQXVyMjcyNzc1NTg@._V1_UY268_CR20,0,182,268_AL_.jpg',
        title: 'Gothic Video Game',
        description: 'Awesome game!!!!!!!',
        price: 23
    }),

    new Product({
        imagePath: 'https://m.media-amazon.com/images/M/MV5BZGFiMDYxOTQtZmRkYy00YjU4LTgwY2QtYzA0YzkzNWQyODkyXkEyXkFqcGdeQXVyMjcyNzc1NTg@._V1_UY268_CR20,0,182,268_AL_.jpg',
        title: 'Worlds of Tanks',
        description: 'Awesome game!!!!!!!',
        price: 34
    }),

    new Product({
        imagePath: 'https://m.media-amazon.com/images/M/MV5BZGFiMDYxOTQtZmRkYy00YjU4LTgwY2QtYzA0YzkzNWQyODkyXkEyXkFqcGdeQXVyMjcyNzc1NTg@._V1_UY268_CR20,0,182,268_AL_.jpg',
        title: 'GTA V',
        description: 'Awesome game!!!!!!!',
        price: 45
    }),

    new Product({
        imagePath: 'https://m.media-amazon.com/images/M/MV5BZGFiMDYxOTQtZmRkYy00YjU4LTgwY2QtYzA0YzkzNWQyODkyXkEyXkFqcGdeQXVyMjcyNzc1NTg@._V1_UY268_CR20,0,182,268_AL_.jpg',
        title: 'Sims 34',
        description: 'Awesome game!!!!!!!',
        price: 56
    }),

    new Product({
        imagePath: 'https://m.media-amazon.com/images/M/MV5BZGFiMDYxOTQtZmRkYy00YjU4LTgwY2QtYzA0YzkzNWQyODkyXkEyXkFqcGdeQXVyMjcyNzc1NTg@._V1_UY268_CR20,0,182,268_AL_.jpg',
        title: 'Gothic Video Game',
        description: 'Awesome game!!!!!!!',
        price: 67
    }),

    new Product({
        imagePath: 'https://m.media-amazon.com/images/M/MV5BZGFiMDYxOTQtZmRkYy00YjU4LTgwY2QtYzA0YzkzNWQyODkyXkEyXkFqcGdeQXVyMjcyNzc1NTg@._V1_UY268_CR20,0,182,268_AL_.jpg',
        title: 'Gothic Video Game',
        description: 'Awesome game!!!!!!!',
        price: 10
    }),

];
var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function (err, result) {
        done++;
        if(done === products.length){
            exit();
        }
    });
}
function exit(){
    mongoose.disconnect();
}

