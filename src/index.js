import React, { Component } from 'react';
import ReactDOM, {render} from 'react-dom';
import Library from './library';



let bookList = [
    {
        "title": "Ape Gama",
        "author": "Martin Wickramasinghe",
        "pages":300
    },
    {
        "title": "Ape Gama1",
        "author": "Martin Wickramasinghe1",
        "pages":600
    },
    {
        "title": "Ape Gama2",
        "author": "Martin Wickramasinghe2",
        "pages":400
    }
]

render(<Library books={bookList}/>, document.getElementById('root'));

