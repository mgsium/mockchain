import React from "react";

import { cx } from "emotion";
import Styles from "./ActivityWidgetStyles";

type Props = {
    id: string,
    name: string,
    creatorId: string
};
type State = {};

export default class ActivityWidget extends React.Component<Props, State> {

    render() {
        return (
            <div className={cx( Styles.widget )}>
                <br/><br/><br/>
                <h1 style={{ fontWeight: "bold", textAlign: "center", marginBottom: 10, fontSize: "40pt" }}>{this.props.name}</h1>
                <h4 style={{ textAlign: "center", fontFamily: "Inter, sans-serif", color: "whitesmoke" }}>By Tyler Durden</h4>
                <br/><br/><br/>
            </div>
        )
    }

}