import { useState } from 'react';
import css from './SearchBox.module.css'
export default function SearchBox() {

    const [inputValue, setInputValue] = useState('');

    return (
        <div className='css.container'>
            <label htmlFor="search"> Find contacts by name</label>
            <input type="text" value={inputValue} onChange={(event) => {
                setInputValue(event.target.value)
            }} />
    
        </div>
            );
}