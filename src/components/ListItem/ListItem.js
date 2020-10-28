import React from 'react';
import './listItem.css';

export function ListItem({data, handleChangePros, index, title}){
    return (
        <li className={'list-item'}>
            <input type="text" name={title} defaultValue={data} onChange={(e) => handleChangePros(index, e)} />
        </li>
    )
}