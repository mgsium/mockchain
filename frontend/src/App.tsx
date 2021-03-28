import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Styles from "./AppStyles";
import About from "./components/pages/about/About";
import Activity from "./components/pages/activity/Activity";
import Earn from "./components/pages/earn/Earn";
import Events from "./components/pages/events/Events";
import Host from "./components/pages/host/Host";
import Login from "./components/pages/login/Login";
import Room from "./components/pages/room/Room";

type State = {};
type Props = {};

export default class App extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }
 
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    {/* Paths */}
                    <Route path="/"                     component={ Login }         exact/>
                    <Route path="/events"               component={ Events }        exact/>
                    <Route path="/earn"                 component={ Earn }          exact/>
                    <Route path="/host"                 component={ Host }          exact/>
                    <Route path="/about"                component={ About }         exact/>
                    <Route path="/room"                 component={ Room }          exact/>
                    <Route path="/activity"             component={ Activity }      exact/>
                </Switch>
            </BrowserRouter>
        )
    }
}