import { css } from "emotion";

const Styles = {
    globalStyles: css`
        h1, h2, h3, h4, h5, h6 {
            font-family: Josefin Sans, sans-serif;
        }

        min-height: 100vh;
    `,
    navbarStyles: css`
        padding: 30px;
        padding-bottom: 20px;
        border-bottom: 1px solid #dcdcdc;
        background: whitesmoke;
    `,
    navPanel: css`
        display: inline-block;
    `,
    linkStyles: css`
        &, &:visited, &:hover, &:active {
            color: #333;
            text-decoration: none;
        }
    `,
    navBtn: css`
        font-family: Josefin Sans, sans-serif;
        font-size: 20pt;
        padding: 10px;
        border-radius: 10px;
        transition: .25s;
        display: inline-block;
        vertical-align: middle;
        padding-top: 15px;

        &:hover {
            background: whitesmoke;
        }
    `,
    secondaryTheme: css`
        &, &:hover {
            background: black;
            color: white;
        }
    `
};

export default Styles;