import { css } from "emotion";

const Styles = {
    textField: css`
        background: rgba(0, 0, 0, 0.04);
        transition: background .25s;
        width: 100%;
        resize: none;
        border-radius: .7rem;
        outline: none;
        border: 0;
        padding: 20px;
        font-family: Josefin Sans, sans-serif;
        font-size: 20pt;

        &:focus {
            background: white;
        }
    `
};

export default Styles;