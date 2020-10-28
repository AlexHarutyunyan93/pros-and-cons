import React, {useState} from 'react';
import AppComponent from "./App.component";

function AppContainer() {
    const [state, setState] = useState({
        pros: ['a', 'b', 'c', ''],
        cons: ['a', 'b', 'c', '']
    })

    const handleChangePros = (index, e) => {
        const newState = {...state};
        const value = e.target.value;
        const key = e.target.name;

        newState[key][index] = value;

        if(!value) {
            newState[key].splice(index, 1);
        }  else if(index === state[e.target.name].length-1) {
            newState[key].push('');
        }

        setState(newState);
    }

    return <AppComponent state={state} handleChangePros={handleChangePros} />
}

export {AppContainer as App};