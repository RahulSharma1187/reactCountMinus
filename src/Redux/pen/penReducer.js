import {BUY_PEN} from './penType'

const inisialState = {
    numberOfPens : 15
}

const PenReducer = (state = inisialState, action) => {
    switch(action.type) {
        case BUY_PEN : return {
            ...state,
            numberOfPens : state.numberOfPens  - action.payload
        }
        default : return state;
    }
}  

export default PenReducer