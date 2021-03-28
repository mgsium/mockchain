import React from "react";

import { cx } from "emotion";
import Styles from "./EventsStyles";
import Template from "../template/Template";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import netlifyIdentity from "netlify-identity-widget";
import { Link } from "react-router-dom";

import $ from "jquery";
import CommonLayout from "../template/commonLayout/CommonLayout";
import PlusBtn from "../../widgets/PlusBtn/PlusBtn";
import EventWidgetSkeleton from "../../widgets/EventWidget/EventWidgetSkeleton";
import EventWidget from "../../widgets/EventWidget/EventWidget";

type Props = {};
type State = {};

export default class Events extends React.Component<Props, State> {

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
                    <Container fluid>
                        {/* Header Row (1) */}
                        <Row>
                            <Col>
                                <h1>My Events</h1>
                            </Col>
                            <Col>
                                <span style={{ float: "right" }}>
                                    <PlusBtn/>
                                </span>
                            </Col>
                        </Row>
                        {/* My Events Row */}
                        <Row>
                            <Col style={{ padding: 20 }}>
                                <h3 style={{ textAlign: "center" }}>You don't have any events yet!</h3>
                            </Col>
                        </Row>
                        <br/>
                        {/* Header Row (2) */}
                        <Row>
                            <Col>
                                <h1>Public Events</h1>
                            </Col>
                        </Row>
                        <br/>
                        {/* Public Events Row */}
                        <Row>
                            <Col>
                                <EventWidget
                                    id="test"
                                    header="Introduction to Organic Chemistry"
                                    description="Some Random Event about Stuff"
                                    entryFee={6.03}
                                    startTimestamp={(new Date()).toISOString()}
                                    endTimestamp={(new Date()).toISOString()}
                                    userId="Some Random User"
                                />
                                <br/>
                                <EventWidgetSkeleton/>
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