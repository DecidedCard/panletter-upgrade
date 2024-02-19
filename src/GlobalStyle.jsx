const { createGlobalStyle } = require("styled-components");

const GlobalStyle = createGlobalStyle`
    *{   
        font-family: "Noto Serif KR", serif;
        font-weight: 400;
        font-style: normal;
        box-sizing: border-box;
    }
    body {
        background-color: rgba(45, 50, 80, 0.7);
    }

    input::placeholder{
        color: #F6B17A;
    }

    textarea::placeholder{
        color: #F6B17A;
    }
`;

export default GlobalStyle;
