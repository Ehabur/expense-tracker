import React, { useReducer } from 'react';
import Child from './Child';
import CounterReducer from './CounterReducer';
import counterReducer from './CounterReducer';
const Child2 = () => {
    let [state, dispatch] = useReducer(counterReducer, 10);
    return (
        <div>
            <h2>This is second child using Counter Reducer</h2>
            <h3> Value of reducer state is: {state}</h3>
            <button onClick={()=> dispatch('INCREMENT')}>Increment Reducer</button>
        </div>
    )
}

export default Child2;