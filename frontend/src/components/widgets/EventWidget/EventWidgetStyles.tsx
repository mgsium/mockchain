import { css } from "emotion";

const Styles = {
    widget: css`
        background: white;
        border: 1px solid #DCDCDC;
        border-radius: 1rem;
        padding: 20px;
        transition: all .25s;
        width: 100%;

        &:hover {
            border-color: #999;
            cursor: pointer;
        }
    `
};

export default Styles;