import { css } from "emotion";

const Styles = {
    panel: css`
        border-radius: 1rem;
        border: 1px solid #DCDCDC;
        padding: 30px;
        transition: all .25s;
    `,
    textField: css`
        background: rgba(0, 0, 0, 0.04) !important;
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
            background: white !important;
        }
    `,
    correct: css`
        background: var(--success);
        color: white;
    `,
    incorrect: css`
        background: var(--danger);
        color: white;
    `
};

export default Styles;