import React, {useState} from 'react';

const Counter = () => {
    const [value, changeValue] = useState(0);
    // const [value, decValue] = useState(0)
    return ( 
        <div >
            <h1>{value}</h1>
            <button onClick={()=>{changeValue(value+1)}}>+</button>
            <button onClick={()=>{changeValue(value-1)}}>-</button>
        </div>
     );
}


 
export default Counter;