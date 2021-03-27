import { css } from "emotion";

const Styles = {
    loginPrompt: css`
        padding: 20px;
        border: 1px solid #DCDCDC;
        border-radius: 1rem;
        width: 550px;
        text-align: center;
        background: white;
    `,
    handWave: css`
        animation-name: wave-animation; 
        animation-duration: 2.5s;
        animation-iteration-count: infinite;
        transform-origin: 70% 70%;
        display: inline-block;
        @keyframes wave-animation {
            0% { transform: rotate( 0.0deg) }
            10% { transform: rotate(14.0deg) }  /* The following five values can be played with to make the waving more or less extreme */
            20% { transform: rotate(-8.0deg) }
            30% { transform: rotate(14.0deg) }
            40% { transform: rotate(-4.0deg) }
            50% { transform: rotate(10.0deg) }
            60% { transform: rotate( 0.0deg) }  /* Reset for the last half to pause */
            100% { transform: rotate( 0.0deg) }
        }
`
};

export default Styles;