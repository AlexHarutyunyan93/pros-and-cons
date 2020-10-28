import React from 'react';
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import {List} from "./List";
import './app.css';

function AppComponent({state, handleChangePros}) {
    return (
        <Card className={'app'}>
            <h1 className={'title'}>Should I eat at McDonalds?</h1>
            <Divider />
            <div className={'lists-wrapper'}>
                <List title={"pros"} data={state["pros"]} handleChangePros={handleChangePros} />
                <List title={"cons"} data={state["cons"]} handleChangePros={handleChangePros} />
            </div>
        </Card>
    )
}

export default AppComponent;