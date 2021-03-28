import React from "react";

import { cx } from "emotion";
import Styles from "./CommonLayoutStyles";

type Props = {};
type State = {};

export default class CommonLayout extends React.Component<Props, State> {

    render() {
        return (
            <div style={{ width: "100%", minHeight: "calc(100vh - 117px)", background: "whitesmoke" }}>
                    <div style={{ display: "table", marginLeft: "auto", marginRight: "auto", height: "100%", minWidth: 800 }}>
                        <br/><br/>
                        {this.props.children}
                        <br/><br/>
                    </div>
            </div>
        )
    }

}