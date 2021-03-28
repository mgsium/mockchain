import React from "react";
import {useLocation} from 'react-router-dom';

import Nav from "react-bootstrap/Nav";
import netlifyIdentity from "netlify-identity-widget";

import { cx } from "emotion";
import Styles from "./TemplateStyles";
import NavBtn from "./NavBtn";
import { Link } from "react-router-dom";
import CStyles from "../../ComponentStyles";

import Particles from "react-tsparticles";
import "./Particles/particlesBg.css";
import particlesCurr from "./Particles/particlesjs-config (1).json";
import { ISourceOptions } from 'tsparticles';

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
            <div>
                <div>
                    {
                        (window.location.pathname == "/") ? (
                            <Particles options={particlesCurr as ISourceOptions}/>
                        ) : null
                    }
                </div>
                <div className={cx( Styles.globalStyles )}>
                    <div className={cx( Styles.navbarStyles )}>
                        <Link to="/" className={cx( CStyles.linkStyles )}>
                            <h1 style={{ fontWeight: 900, marginBottom: 0, display: "inline-block", verticalAlign: "top", paddingTop: 10 }} className={cx( Styles.headerStyles )}>Mockchain</h1>
                        </Link>
                        <div style={{ display: "inline-block", width: "calc(100vw - 500px)" }}>
                            <div className={cx( Styles.navPanel )}>
                                <NavBtn to="/events">Events</NavBtn>
                                <NavBtn to="/earn">Earn <span><strong>MTC</strong></span></NavBtn>
                                <NavBtn to="/host">Host an Event</NavBtn>
                                <NavBtn to="/about"><span style={{ color: "#666" }}>About</span></NavBtn>
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
                    { this.props.children }
                </div>
            </div>
        )
    }

}