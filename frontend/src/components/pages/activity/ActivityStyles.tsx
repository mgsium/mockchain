import { css } from "emotion";

const Styles = {
    colorbtn: css`
        animation: bgColor 10s infinite linear;
        @keyframes bgColor {
            16.6% { background: #0000FF !important; }
            50% { background: #9932CC !important; }
            88.6% { background: #FF1493 !important; }
            100% { background: #0000FF !important; }
        }
    `
};

export default Styles;