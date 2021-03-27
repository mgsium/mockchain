import React from "react";

import Nav from "react-bootstrap/Nav";
import netlifyIdentity from "netlify-identity-widget";

import { cx } from "emotion";
import Styles from "./TemplateStyles";
import NavBtn from "./NavBtn";
import { Link } from "react-router-dom";
import CStyles from "../../ComponentStyles";

type Props = {};
type State = {
    user: netlifyIdentity.User
};

export default class Template extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            user: null
        }
    }

    componentDidMount() {
        netlifyIdentity.init();

        const user = netlifyIdentity.currentUser();

        if (user) {
            this.setState({ user: user });
        } else {
            console.log("Test");
        }
    }

    openNetlifyIdentity() {
        netlifyIdentity.open();
    }

    render() {
        return (
            <div className={cx( Styles.globalStyles )}>
                <div className={cx( Styles.navbarStyles )}>
                    <Link to="/" className={cx( CStyles.linkStyles )}>
                        <h1 style={{ fontWeight: 900, marginBottom: 0, display: "inline-block", verticalAlign: "top", paddingTop: 10 }} className={cx( Styles.headerStyles )}>Mockchain</h1>
                    </Link>
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
                    <span style={{ float: "right" }} onClick={this.openNetlifyIdentity}>
                        {
                            this.state.user ? (
                                <div className={cx( Styles.userPanel )} onClick={this.openNetlifyIdentity}>
                                    &nbsp;{this.state.user.user_metadata.full_name}&nbsp;
                                </div>
                            ) : <NavBtn to="/" isSecondary>Login</NavBtn>
                        }
                    </span>
                </div>
                <hr style={{ margin: 0, width: "calc(100% - 40px)", marginLeft: "auto", marginRight: "auto" }} hidden/>
                {this.props.children}
            </div>
        )
    }

}