import React from "react";

import { cx } from "emotion";
import CStyles from "../../ComponentStyles";
import Styles from "./EventsStyles";
import Template from "../template/Template";
import Config from "../../../helper/config";

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
type State = {
    events: any[]
};

export default class Events extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            events: []
        }
    }

    componentDidMount() {
        netlifyIdentity.init();

        const user = netlifyIdentity.currentUser();
        if (!user) $("#go-home").trigger("click");

        netlifyIdentity.on("logout", () => {
            $("#go-home").trigger("click");
        });

        this.getEvents();

        $(window).on("scroll", () => {
            var scrollHeight = $(document).height();
            var scrollPos = $(window).height() + $(window).scrollTop();
            // @ts-ignore
            if ((scrollHeight as number - Math.floor(scrollPos)) / scrollHeight as number == 0) {
                this.getEvents();
            }
        });
    }

    async getEvents() {
        // Fetch Activities
        const res = await fetch(`${Config.api_endpoint}/event/all`);
        const data = await res.json();
        console.log(data);
        this.setState({ events: this.state.events.concat(data) });
    }

    render() {
        return (
            <Template>
                <CommonLayout>
                    <Container style={{ maxWidth: 820 }} fluid>
                        {/* Header Row (1) */}
                        <Row>
                            <Col>
                                <h1>My Events</h1>
                            </Col>
                            <Col>
                                <Link to="/host" className={cx( CStyles.linkStyles )} style={{ float: "right" }}>
                                    <PlusBtn/>
                                </Link>
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
                                {
                                    this.state.events.map(e =>
                                        <> 
                                            <EventWidget
                                                id={e.id.S}
                                                header={e.name.S}
                                                description={e.description.S}
                                                entryFee={e.entryFee.N}
                                                startTimestamp={(new Date()).toISOString()}
                                                endTimestamp={(new Date()).toISOString()}
                                                userId={e.userId.S}
                                            />
                                            <br/>
                                        </>
                                    )
                                }
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