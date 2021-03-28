import React from "react";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";

import { cx } from "emotion";
import CStyles from "../../ComponentStyles";
import Styles from "./ActivityStyles";
import netlifyIdentity from "netlify-identity-widget";
import Template from "../template/Template";
import CommonLayout from "../template/commonLayout/CommonLayout";
import Config from "../../../helper/config";
import QuestionPanel from "../../widgets/QuestionPanel/QuestionPanel";
import Button from "react-bootstrap/Button";

type Props = {};
type State = {
    questions: any[]
};

export default class Activity extends React.Component<Props, State> {

    activity_id: string;

    constructor(props: Props) {
        super(props);

        this.state = {
            questions: []
        }

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

        this.getQuestions();
    }

    async getQuestions() {
        const res = await fetch(`${Config.api_endpoint}/activity/question/all`);
        const data = await res.json();
        console.log(data);
        this.setState({ questions: data.filter((e: any) => e.activityId.S == this.activity_id) });
    }

    render() {
        return (
            <Template>
                <CommonLayout>
                    <Container fluid>
                        {
                            this.state.questions.map(q => <QuestionPanel question={q.question.S} answer={q.answer.S}/>)
                        }
                        <br/><br/>
                        <Link to="/earn" className={cx( CStyles.linkStyles )}>
                            <Button className={cx( CStyles.baseBtn, CStyles.secondaryBtn, Styles.colorbtn )} style={{ width: "100%" }}>
                                Go Back
                            </Button>
                        </Link>
                    </Container>
                </CommonLayout>
                <Link  to="/" hidden>
                    <span id="go-home">Go Home</span>
                </Link>
            </Template>
        )
    }

}