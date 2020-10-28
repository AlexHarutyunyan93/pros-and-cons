import React from 'react';
import {ListItem} from '../ListItem';
import './list.css'

export function List({title, data, handleChangePros}){

    return (
        <div className={'list-container-wrapper'}>
            <h3>{title.toUpperCase()}</h3>
            <ol className={'list-container'}>
                {
                    data.map((e, index) => <ListItem key={Math.random()} {...{title, index, data: e, handleChangePros}} />)
                }
            </ol>
        </div>
    )
}

