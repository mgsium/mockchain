import React from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";

import { cx } from "emotion";
import CStyles from "../../ComponentStyles";
import Styles from "./LoginStyles";
import Template from "../template/Template";

import netlifyIdentity from "netlify-identity-widget";
import $ from "jquery";

type Props = {};
type State = {};

export default class Login extends React.Component<Props, State> {

    componentDidMount() {
        netlifyIdentity.init();

        const user = netlifyIdentity.currentUser();
        if (user) $("#go-to-events").trigger("click");

        netlifyIdentity.on("login", () => {
            $("#go-to-events").trigger("click");
        });
    }

    openIdentityWidget() {
        netlifyIdentity.open();
    }

    render() {
        return (
            <Template>
                {/** div for particles.js */}
                <div style={{ width: "100%", height: "calc(100vh - 117px)" }}>
                    <div style={{ display: "table", marginLeft: "auto", marginRight: "auto", height: "100%" }}>
                        <div style={{ display: "table-cell", verticalAlign: "middle" }}>
                            <div className={cx( Styles.loginPrompt)}>
                                <div style={{ padding: 40, paddingTop: 30, paddingBottom: 10 }}>
                                    <h2 style={{ fontWeight: "bold" }}>
                                        <span className={cx( Styles.handWave )}>👋</span>
                                        &nbsp;
                                        Welcome to Mockchain
                                        &nbsp;
                                    </h2>
                                    <br/>
                                    <p style={{ textAlign: "center", color: "#666", fontFamily: "Inter, sans-serif", fontSize: "18pt", width: "80%", display: "table" }} className="ml-auto mr-auto">
                                        Join us on our mission to decentralize education.
                                    </p>
                                </div>
                                <Button 
                                    className={cx( CStyles.baseBtn, CStyles.secondaryBtn )} 
                                    style={{ marginBottom: 10, marginTop: 10, width: "100%" }}
                                    onClick={this.openIdentityWidget}
                                >
                                    Login
                                </Button>
                            </div>
                            <br/><br/>
                        </div>
                    </div>
                </div>
                <Link  to="/events" hidden>
                    <span id="go-to-events">Go to Events</span>
                </Link>
            </Template>
        )
    }

}