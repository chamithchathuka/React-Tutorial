
import React, { Component } from 'react';
import ReactDOM, {render} from 'react-dom';
import PropTypes from 'prop-types'
import {NotHiring} from './nothiring'
import {Hiring} from './hiring'
import {Book} from './book'

class Library extends React.Component{

    static defaultProps = {
        books:[
            {"title":"Tahoe Tales ","author":"chamith","pages":500 }
        ]
    }

    state = {
        open:false,
        freeBookMark : true,
        hiring : false,
        data:[]
    }

    toggleOpenClosed = () => {
        this.setState(
            previousState  => ({
                open:!previousState.open
            })
        )
    }

    componentDidMount(){
        this.setState({loading:true})
        fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
        .then(data => data.json())
        .then(data => this.setState({data,loading:false}))
    }





    render() {
        const {books} = this.props
        return (
            <div>
                <div>
                    {this.state.loading ? "loading"
                    :<div>
                       {this.state.data.map(product => {
                           return(
                               <div>
                                    
                                   <h3> Library Product of the week</h3>
                                   <h4>{product.name}</h4>
                                   <img src={product.image} height='100px'/>
                                   </div>
                           )
                       })}
                    </div>
                    
                    } 
                    
                </div>
                <h1>
                The Library is {this.state.open ? 'open' : 'closed'}
                <p>Status {this.state.hiring ? <Hiring /> : <NotHiring/> }</p>
                <button onClick={ this.toggleOpenClosed }>Change</button>
                </h1>
                {books.map(
                    (book, i) =>
                <Book 
                    key={i}  
                    title={book.title} 
                    author={book.author} 
                    pages={book.pages}
                    freeBookMark={this.state.freeBookMark}
                    />
                
                )}

              
                
            </div>
        )
    }
}


Library.propTypes = {
    books:PropTypes.array
}

Book.propTypes={
    title:PropTypes.string,
    author:PropTypes.string,
    pages:PropTypes.number,
    freeBookmark: PropTypes.bool
}

export default Library;