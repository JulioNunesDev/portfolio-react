import React from 'react';
import './Input.css'



const Input = ({placeholder, onChange}) => {
    return (
        <input  type='text'  placeholder={placeholder} onChange={onChange} autoFocus />
    )
}
 
export default Input;