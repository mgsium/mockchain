import React from "react";
import { Link } from "react-router-dom";

import { cx } from "emotion";
import CStyles from "../../ComponentStyles";
import Styles from "./ActivityWidgetStyles";

type Props = {
    id: string,
    name: string,
    creatorId: string,
    description: string
};
type State = {};

export default class ActivityWidget extends React.Component<Props, State> {

    render() {
        return (
            <Link to={`/activity?activity_id=${this.props.id}`} className={cx( CStyles.linkStyles )}>
                <div className={cx( Styles.widget )}>
                    <br/><br/><br/>
                    <h1 style={{ fontWeight: "bold", textAlign: "center", marginBottom: 10, fontSize: "40pt" }}>{this.props.name}</h1>
                    <h4 style={{ textAlign: "center", fontFamily: "Inter, sans-serif", color: "whitesmoke" }}>{this.props.description}</h4>
                    <br/><br/><br/>
                </div>
            </Link>
        )
    }

}