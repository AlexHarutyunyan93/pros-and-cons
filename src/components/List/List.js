import React, {useRef} from 'react';
import {ListItem} from '../ListItem';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import './list.css'


export function List({title, moveCard, data, handleChangePros, checkLists}) {
    return (
        <div className={'list-container-wrapper'}>
            <h3>{title.toUpperCase()}</h3>
            <DndProvider backend={HTML5Backend}>
                <ol className={'list-container'} >
                    {
                        data.map((e, index) => <ListItem  key={e.id} {...{checkLists, index, moveCard, handleChangePros, ...e}} />)
                    }
                </ol>
            </DndProvider>
        </div>
    )
}

