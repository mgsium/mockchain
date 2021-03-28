import { css } from "emotion";

const Styles = {
    wrapperStyles: css`
        background: #d8d8d8;
        border-radius: 20px;
        padding: 25px;
        transition: all 0.2s;
        border-color: whitesmoke;
        border: 1px solid whitesmoke;
        width: 60%;

        &:hover, &:active {
            background: whitesmoke;
            border: 1px solid whitesmoke;
        }
    `,
    indexIcon: css`
        border-radius: 50%;
        padding: 10px;
        display: inline-block;
        background: #777;
    `
}

export default Styles;