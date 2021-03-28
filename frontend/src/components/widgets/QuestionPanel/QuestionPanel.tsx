import React from "react";

import Button from "react-bootstrap/Button";

import { cx } from "emotion";
import CStyles from "../../ComponentStyles";
import Styles from "./QuestionPanelStyles";
import $ from "jquery";

type Props = {
    question: string,
    answer: string
};
type State = {
    answered: boolean,
    correct: boolean
};

export default class QuestionPanel extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            answered: false,
            correct: false
        }

        this.submitAns = this.submitAns.bind(this);
    }

    submitAns() {
        this.setState({
            answered: true,
            correct: ($("#ans-fld").val() == this.props.answer)
        });
    }

    render() {
        const theme = (this.state.correct ? Styles.correct : Styles.incorrect);
        return (
            <>
                <div className={cx( Styles.panel, (this.state.answered ? theme : null) )}>
                    <h3>{this.props.question} (2MTC)</h3>
                    <br/>
                    <input
                        id="ans-fld"
                        className={cx( Styles.textField, "shadow-sm" )}
                        placeholder="Answer Here..."
                        disabled={this.state.answered}
                    ></input>
                    <br/><br/>
                    <Button
                        className={cx( CStyles.baseBtn, CStyles.secondaryBtn )}
                        disabled={this.state.answered}
                        style={{ width: "100%" }}
                        onClick={this.submitAns}
                    >Submit</Button>
                </div>
                <br/>
            </>
        )
    }

}