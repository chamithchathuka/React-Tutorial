import React, { Component } from 'react';

export const Book = ({title = "title not provided ",author= "No Author ",pages= "title not provided ", freeBookMark}) =>{
        return(
            <section>
                <h1>{title}</h1>
                <p>Author : {author}</p>
                <p>Pages : {pages}</p>
                <p>Bookmark {freeBookMark ? 'Yes':'No'} </p>
            </ section>
        )
    }