import { css } from "emotion";

const Styles = {
    widget: css`
        background: white;
        color: white;
        border: 1px solid #DCDCDC;
        border-radius: 1rem;
        padding: 20px;
        transition: all .25s;
        width: 100%;

        animation: bgColor 10s infinite linear;
        @keyframes bgColor {
            16.6% { background: #0000FF; }
            50% { background: #9932CC; }
            88.6% { background: #FF1493; }
            100% { background: #0000FF; }
        }

        &:hover {
            transform: scale(1.04);
            cursor: pointer;
        }
    `
};

export default Styles;