import React from "react";

import Form from "react-bootstrap/Form";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { cx } from "emotion";
import CStyles from "../../ComponentStyles";
import Styles from "./HostStyles";
import Template from "../template/Template";

import netlifyIdentity from "netlify-identity-widget";
import { Link } from "react-router-dom";

import $ from "jquery";
import CommonLayout from "../template/commonLayout/CommonLayout";
import Button from "react-bootstrap/esm/Button";
import { v4 as uuidv4 } from "uuid";

type Props = {};
type State = {
    feeValue: number
};

export default class Host extends React.Component<Props, State> {

    feeMultiplier: number = 0.5;

    constructor(props: Props) {
        super(props);

        this.state = {
            feeValue: 50
        }

        this.updateFeeValue = this.updateFeeValue.bind(this);
        this.forceStateUpdate = this.forceStateUpdate.bind(this);
        this.submit = this.submit.bind(this);
    }

    componentDidMount() {
        netlifyIdentity.init();

        const user = netlifyIdentity.currentUser();
        if (!user) $("#go-home").trigger("click");

        netlifyIdentity.on("logout", () => {
            $("#go-home").trigger("click");
        });
    }

    updateFeeValue() {
        this.setState({ feeValue: $("#fee-input").val() as number });
    }

    isValid():boolean {
        return !!$("#header-fld").val() && !!$("#desc-fld").val();
    }

    forceStateUpdate() {
        this.forceUpdate();
    }

    submit() {
        const body = JSON.stringify({
            id: uuidv4(),
            name: $("#header-fld").val(),
            description: $("#desc-fld").val(),
            entryFee: (this.state.feeValue * this.feeMultiplier),
            userId: netlifyIdentity.currentUser().id,
            startTimestamp: (new Date()).toISOString(),
            endTimestamp: (new Date()).toISOString()
        });
        // Put Event
    }

    render() {
        return (
            <Template>
                <CommonLayout>
                    <Container fluid>
                        {/* Header Row (1) */}
                        <Row>
                            <Col>
                                <h1>Host an Event</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <br/>
                                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "16pt", color: "#666" }}>
                                    Get rewarded while teaching by hosting an event! <Link to="/about#gettingpaid" className={cx( CStyles.linkStyles )} style={{ textDecoration: "underline" }}><em>How does this work?</em></Link>
                                </p>
                                <br/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <input
                                    id="header-fld"
                                    className={cx( Styles.textField, "shadow-sm" )}
                                    placeholder="Introduction to Linear Algebra"
                                    onChange={this.forceStateUpdate}
                                >
                                    
                                </input>
                                <br/><br/>
                                <textarea
                                    id="desc-fld"
                                    className={cx( Styles.textField, "shadow-sm" )}
                                    placeholder="In this event we will..."
                                    onChange={this.forceStateUpdate}
                                />
                            </Col>
                        </Row>
                        {/* TODO: Date & Time Pickers */}
                        <Row>
                            <Col>
                                <br/>
                                <h3>Entry Fee: <strong>{this.state.feeValue * this.feeMultiplier} MTC</strong></h3>
                                <Form.Control 
                                    id="fee-input"
                                    type="range"
                                    value={this.state.feeValue}
                                    onChange={this.updateFeeValue}
                                />
                                <br/>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col>
                                <Button 
                                    className={cx( CStyles.baseBtn, CStyles.secondaryBtn )} 
                                    style={{ width: "100%" }} 
                                    disabled={!this.isValid()}
                                    onClick={this.submit}
                                >
                                    I'm Done!
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </CommonLayout>
                <Link  to="/" hidden>
                    <span id="go-home">Go Home</span>
                </Link>
            </Template>
        )
    }

}