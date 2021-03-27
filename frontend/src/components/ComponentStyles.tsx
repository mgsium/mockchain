import { css } from "emotion";

const Styles = {
    baseBtn: css`
        transition: all .25s;
        padding: 15px;
        font-size: 20pt;
        font-family: Josefin Sans, sans-serif;
        font-weight: bold;
        padding-top: 17px;

        &:hover {
            transform: scale(1.04);
        }
    `,
    secondaryBtn: css`
        &, &:hover, &:active {
            color: white;
            background: black !important;
            border-color: black !important;

            outline: none !important;
            box-shadow: none !important;
        }
        
        border-radius: .7rem;
    `,
    linkStyles: css`
        &, &:visited, &:hover, &:active {
            color: #333;
            text-decoration: none;
        }
    `
};

export default Styles;