import React from 'react';

const InputwithLable = (props) => {
    return ( 
        <div className="input">
            <label htmlFor={props.name}>{props.name}</label>
            <input name={props.name} type={props.type} value={props.value} onChange={props.onchange}/>
        </div>
     );
}
 
export default InputwithLable;