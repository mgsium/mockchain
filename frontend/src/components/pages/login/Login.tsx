import React from "react";

import Button from "react-bootstrap/Button";

import { cx } from "emotion";
import CStyles from "../../ComponentStyles";
import Styles from "./LoginStyles";
import Template from "../template/Template";

type Props = {};
type State = {};

export default class Login extends React.Component<Props, State> {

    render() {
        return (
            <Template>
                {/** div for particles.js */}
                <div style={{ width: "100%", height: "calc(100vh - 117px)", background: "whitesmoke" }}>
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
                                <Button className={cx( CStyles.baseBtn, CStyles.secondaryBtn )} style={{ marginBottom: 10, marginTop: 10, width: "100%" }}>
                                    Login
                                </Button>
                            </div>
                            <br/><br/>
                        </div>
                    </div>
                </div>
            </Template>
        )
    }

}