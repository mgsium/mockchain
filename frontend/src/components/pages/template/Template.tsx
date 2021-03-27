import React from "react";

import Nav from "react-bootstrap/Nav";

import { cx } from "emotion";
import Styles from "./TemplateStyles";
import NavBtn from "./NavBtn";

type Props = {};
type State = {};

export default class Template extends React.Component<Props, State> {

    render() {
        return (
            <div className={cx( Styles.globalStyles )}>
                <div className={cx( Styles.navbarStyles )}>
                    <h1 style={{ fontWeight: 900, marginBottom: 0, display: "inline-block", verticalAlign: "top", paddingTop: 10 }} className={cx( Styles.headerStyles )}>Mockchain</h1>
                    <div style={{ display: "inline-block", width: "calc(100vw - 500px)" }}>
                        <div className={cx( Styles.navPanel )}>
                            {/** FOR LATER
                             * <NavBtn to="/about">About</NavBtn>
                            * */}
                            <NavBtn to="/events">Events</NavBtn>
                            <NavBtn to="/earn">Earn <span><strong>MTC</strong></span></NavBtn>
                            <NavBtn to="/host">Host an Event</NavBtn>
                        </div>
                    </div>
                    <span style={{ float: "right" }}>
                        <NavBtn to="/" isSecondary>Login</NavBtn>
                    </span>
                </div>
                <hr style={{ margin: 0, width: "calc(100% - 40px)", marginLeft: "auto", marginRight: "auto" }} hidden/>
                {this.props.children}
            </div>
        )
    }

}