import React from "react";

import { cx } from "emotion";
import CStyles from "../../ComponentStyles";
import Styles from "./EventWidgetStyles";
import Skeleton from "react-loading-skeleton";
import Button from "react-bootstrap/esm/Button";

type Props = {};
type State = {};

export default class EventWidgetSkeleton extends React.Component<Props, State> {

    render() {
        return (
            <div className={cx( Styles.widget )}>
                <h1>
                    <Skeleton style={{ width: "40%" }}/>
                </h1>
                <p>
                    <Skeleton count={5} style={{ width: "100%" }}/>
                </p>
                <h5>
                    <Skeleton style={{ width: 120 }}/>
                </h5>
                <hr/>
                <Button className={cx( CStyles.baseBtn, CStyles.secondaryBtn )} style={{ width: "100%" }}>
                    &nbsp;
                </Button>
            </div>
        )
    }

}