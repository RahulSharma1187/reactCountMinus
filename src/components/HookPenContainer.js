import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {buyPen} from '../Redux'

function HookPenContainer(){
    const numberOfPens = useSelector(state => state.pen.numberOfPens);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Pen Hook Container</h1>
            <h2>Number of Pens - {numberOfPens}</h2>
            <button onClick={()=>dispatch(buyPen())}>BuyPen</button>
        </div>
    )
}

export default HookPenContainer