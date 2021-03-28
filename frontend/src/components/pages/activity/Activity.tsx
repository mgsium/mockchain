import React from "react";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";

import { cx } from "emotion";
import Styles from "./ActivityStyles";
import netlifyIdentity from "netlify-identity-widget";
import Template from "../template/Template";
import CommonLayout from "../template/commonLayout/CommonLayout";

type Props = {};
type State = {};

export default class Activity extends React.Component<Props, State> {

    activity_id: string;

    constructor(props: Props) {
        super(props);

        // @ts-ignore
        const activity_id = (new URLSearchParams(window.location.search)).get("activity_id");
        if (!activity_id) $("#go-home").trigger("click");
        this.activity_id = activity_id;
    }

    async componentDidMount() {
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

                    </Container>
                </CommonLayout>
                <Link  to="/" hidden>
                    <span id="go-home">Go Home</span>
                </Link>
            </Template>
        )
    }

}