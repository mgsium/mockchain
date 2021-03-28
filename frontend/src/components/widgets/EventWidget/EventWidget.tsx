import React from "react";
import { Link } from "react-router-dom";

import { cx } from "emotion";
import CStyles from "../../ComponentStyles";
import Styles from "./EventWidgetStyles";
import Skeleton from "react-loading-skeleton";
import Button from "react-bootstrap/esm/Button";

type Props = {
    id: string,
    header: string,
    description: string,
    entryFee: number,
    startTimestamp: string,
    endTimestamp: string,
    userId: string
};
type State = {};

export default class EventWidget extends React.Component<Props, State> {

    render() {
        return (
            <div className={cx( Styles.widget )}>
               <div style={{ padding: 10, paddingBottom: 0 }}>
                    <h1 style={{ fontWeight: "bold" }}>
                        {this.props.header}
                    </h1>
                    <p style={{ fontFamily: "Inter, sans-serif", color: "#666", fontSize: "16pt" }}>
                        {this.props.description}
                    </p>
                    <br/>
                    <h5>
                        {this.props.userId}
                    </h5>
                </div>
                <hr/>
                <Link to={`/room?event_id=${this.props.id}`} className={cx( CStyles.linkStyles )}>
                    <Button className={cx( CStyles.baseBtn, CStyles.secondaryBtn )} style={{ width: "100%" }}>
                        Check In for <strong>{this.props.entryFee} MTC</strong>
                    </Button>
                </Link>
            </div>
        )
    }

}