import React, {useEffect, useState, useCallback} from 'react';
import AppComponent from "./App.component";
import {dataService} from "../services";
import {Item} from '../model';
import update from 'immutability-helper';

function AppContainer() {
    const [lists, setLists] = useState(null);

    useEffect(() => {
        dataService.getData().then(res => {
            setTimeout(() => {
                setLists(res)
            }, 0)
        })
    }, [])

    const checkLists = () => {
        // let newState = {...lists};
        // if(lists['pros'][lists['pros'].length-1].value) {
        //     newState['pros'].push(new Item('pros'))
        // }
        // if(lists['cons'][lists['cons'].length-1].value) {
        //     newState['cons'].push(new Item('pros'))
        // }
        // setLists(newState);
    }

    const moveCard = useCallback((key, dragIndex, hoverIndex) => {
        const dragCard = lists[key][dragIndex];

        const newState = {...lists};
        newState[key] = update(newState[key], {
            $splice: [
                [dragIndex, 1],
                [hoverIndex, 0, dragCard],
            ],
        })

        setLists(newState);
    }, [lists]);

    const handleChangePros = (index, e, key) => {
        const newState = {...lists};
        const value = e.target.value;

        newState[key][index].value = value;

        if(!value) {
            newState[key].splice(index, 1);
        }  else if(index === lists[key].length-1) {
            newState[key].push(new Item(key));
        }

        setLists(newState);
    }

    return <AppComponent state={lists} moveCard={moveCard} checkLists={checkLists} handleChangePros={handleChangePros} />


}

export {AppContainer as App};