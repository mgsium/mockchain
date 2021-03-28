import React from "react";

import { cx } from "emotion";
import Styles from "./PlusBtnStyles";
import { Plus } from "react-feather";

type Props = {};
type State = {};

export default class PlusBtn extends React.Component<Props, State> {

    render() {
        return (
            <div className={cx( Styles.plusBtn )} style={{ borderRadius: "50%", display: "inline-block" }}>
                <Plus size={40}/>
            </div>
        )
    }

}