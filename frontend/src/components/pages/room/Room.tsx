import React from "react";
import { Link } from "react-router-dom";

import { cx } from "emotion";
import Styles from "./RoomStyles";
import Template from "../template/Template";
import CommonLayout from "../template/commonLayout/CommonLayout";

import netlifyIdentity from "netlify-identity-widget";
import $ from "jquery";

type Props = {};
type State = {};

export default class Room extends React.Component<Props, State> {

    event_id: string;

    constructor(props: Props) {
        super(props);
        
        // @ts-ignore
        const event_id = (new URLSearchParams(window.location.search)).get("event_id");
        if (!event_id) $("#go-home").trigger("click");
        this.event_id = event_id;
    }

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
                    <iframe
                        src={`https://tokbox.com/embed/embed/ot-embed.js?embedId=ddff2086-48f2-4e51-bd0b-aa4a811e2de0&room=${this.event_id}&iframe=true`}
                        width={1200}
                        height={800}
                        style={{ borderRadius: "1rem", maxWidth: "90vw" }}
                        className="shadow-sm"
                        scrolling="auto"
                        allow="microphone; camera"
                    ></iframe>
                </CommonLayout>
                <Link  to="/" hidden>
                    <span id="go-home">Go Home</span>
                </Link>
            </Template>
        )
    }

}