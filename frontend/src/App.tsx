import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Styles from "./AppStyles";
import Login from "./components/pages/login/Login";

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
                    <Route path="/"     component={ Login } exact/>
                </Switch>
            </BrowserRouter>
        )
    }
}