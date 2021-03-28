import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/esm/Button";

import { cx } from "emotion";
import Styles from "./AboutStyles";
import Template from "../template/Template";

import netlifyIdentity from "netlify-identity-widget";
import { Link } from "react-router-dom";

import $ from "jquery";
import CommonLayout from "../template/commonLayout/CommonLayout";

type Props = {};
type State = {};

export default class About extends React.Component<Props, State> {

    componentDidMount() {
        netlifyIdentity.init();

        const user = netlifyIdentity.currentUser();
        if (!user) $("#go-home").trigger("click");

        netlifyIdentity.on("logout", () => {
            $("#go-home").trigger("click");
        });
    }

    render() {
        return (
            <Template>
                <CommonLayout>
                    <Container>
                        {/* Header Row (1) */}
                        <Row>
                            <Col>
                                <h1>About</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <br/>
                                <h2 style={{ color:"#666" }}>What is Mockchain?</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>
                                    The act of teaching is an incredibly valuable one, with experts passing on years of their specialist experience to students.<br/>
                                </p>
                                <div style={{ }}>
                                    <p>
                                        <span style={{ fontSize:"16px", textDecoration:"underline"}}>Here at Mockchain, we believe that <span style={{ fontWeight:"bold" }}>those who teach</span> should be <span style={{ fontWeight:"bold" }}>properly compensated</span> for their work.<br/></span>
                                    </p>
                                </div>
                                <p>
                                    In order to serve these lessons, teachers can host <span style={{ fontWeight:"bold" }}>livestreams</span> on Mockchain.
                                </p>
                                <p>
                                    <h3>Upon visiting mockcha.in:</h3>
                                    You must either create an account, or login.<br/>
                                    Upon joining Mockchain for the first time, you will be rewarded with a small amount of MTC token.
                                    <br/><br/>
                                    <h3>As a student:</h3>
                                    Browse Mockchain. Look for a lesson or workshop on a topic planned that interests you. There will be a small entry fee, but upon paying this, you will now have access to that lesson when it goes live.<br/>
                                    The good part is, your entry fee will be directly payed towards the teacher of the lesson.<br/>
                                    Thes
                                    <br/>
                                    <h3>As a teacher:</h3>
                                    As a teacher, you have knowledge to share, but you want compensation for this effort. To host on Mockchain, press "Host an Event" at the top. Fill in the details of your planned lesson, as well as an entry fee you feel is fair
                                    to the effort put into your lesson, and simply submit.<br/>
                                    You now have access to a live streaming room, where willing students will pay you MTC to join. Here, you will then present the lesson.
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Link to="/" style={{ display:"table", marginLeft:"auto", marginRight:"auto" }}>
                                <Button variant="light">Go Home</Button>
                            </Link>
                        </Row>
                    </Container>
                </CommonLayout>
                
            </Template>
        )
    }

}