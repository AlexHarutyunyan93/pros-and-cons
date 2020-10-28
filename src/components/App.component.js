import React from 'react';
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import {List} from "./List";
import CircularProgress from "@material-ui/core/CircularProgress";
import './app.css';

function AppComponent({state, moveCard, handleChangePros, checkLists}) {
    return (
        <Card className={'app'}>
            {
                state ?
                    <div>
                        <h1 className={'title'}>Should I eat at McDonalds?</h1>
                        <Divider />
                        <div className={'lists-wrapper'}>
                            <List title={"pros"} data={state["pros"]} moveCard={moveCard} checkLists={checkLists} handleChangePros={handleChangePros} />
                            <List title={"cons"} data={state["cons"]} moveCard={moveCard} checkLists={checkLists} handleChangePros={handleChangePros} />
                        </div>
                    </div> :
                    <div className={'progress'} >
                        <CircularProgress thickness={2} />
                    </div>
            }

        </Card>
    )
}

export default AppComponent;