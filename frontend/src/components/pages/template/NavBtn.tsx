import React from "react";
import { Link } from "react-router-dom";

import { cx } from "emotion";
import Styles from "./TemplateStyles";

type Props = {
    to: string,
    isSecondary?: boolean
};
type State = {};

export default class NavBtn extends React.Component<Props, State> {

    render() {
        return (
            <Link className={cx( Styles.linkStyles )} to={this.props.to}>
                <div className={cx( Styles.navBtn, (this.props.isSecondary ? Styles.secondaryTheme : null) )}>
                    &nbsp;{this.props.children}&nbsp;
                </div>
            </Link>
        )
    }

}