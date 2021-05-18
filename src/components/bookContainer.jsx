import React, {useState} from 'react';
import {connect} from 'react-redux';
import {buyBook} from '../Redux';

const BookContainer = (props) => {
    
    const [number, setNumber] = useState(1);
    return(
        <>
            <h2>Number of Books {props.numberOfBooks}</h2>
            <input type="text" value={number} onChange={e=>setNumber(e.target.value)} />
            <button onClick={()=>props.buyBook(number)}>Buy {number} Books</button>
        </>
    )
}

const mapStatetoProps = (state) => {
    return {
        numberOfBooks : state.book.numberOfBooks
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        buyBook: function(number){
            dispatch(buyBook(number));
        }
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps) (BookContainer);