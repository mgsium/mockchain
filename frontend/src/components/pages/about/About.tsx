import React from "react";

import Container from "react-bootstrap/Container";

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