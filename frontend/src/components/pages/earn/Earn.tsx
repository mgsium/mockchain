import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { cx } from "emotion";
import Styles from "./EarnStyles";
import Template from "../template/Template";

import netlifyIdentity from "netlify-identity-widget";
import { Link } from "react-router-dom";

import $ from "jquery";
import CommonLayout from "../template/commonLayout/CommonLayout";
import Config from "../../../helper/config";
import ActivityWidget from "../../widgets/ActivityWidget/ActivityWidget";

type Props = {};
type State = {
    activities: any[]
};

export default class Earn extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            activities: []
        }
    }

    async componentDidMount() {
        netlifyIdentity.init();

        const user = netlifyIdentity.currentUser();
        if (!user) $("#go-home").trigger("click");

        netlifyIdentity.on("logout", () => {
            $("#go-home").trigger("click");
        });

        // Fetch Activities
        const res = await fetch(`${Config.api_endpoint}/activity/all`);
        const data = await res.json();
        this.setState({ activities: data });
    }

    render() {
        return (
            <Template>
                <CommonLayout>
                    <Container fluid>
                        {/* Header Row (1) */}
                        <Row>
                            <Col>
                                <h1>Activities</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <br/>
                                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "16pt", color: "#666" }}>
                                    Need more <strong>MTC</strong>? You can earn more by completeing these seasonal activities! <br/>
                                    (P.S. If you have a board idea, <a href="https://airtable.com/shrYrAmOCJFKjFarM" target="_blank">tell us about it!</a>)
                                </p>
                                <br/>
                                {
                                    this.state.activities.map(a => 
                                        <ActivityWidget
                                            id={a.id.S}
                                            name={a.name.S}
                                            creatorId={a.creatorId.S}
                                        />
                                    )
                                }
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