import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.primary1};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
.modal-content{
    backdrop-filter: blur(15px);
    background-color: rgba(52, 0, 102, 0.1);
    color: white;
}
.form-control{
  font-size: 16px;
  color: rgb(216, 191, 191) !important;
  background: transparent !important;
}
imput[type=text] {
  color: rgb(216, 191, 191) !important;
}
/* Change autocomplete styles in WebKit */
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  -webkit-text-fill-color: rgb(216, 191, 191);
  -webkit-box-shadow: 0 0 0px 1000px rgb(11,10,26) inset;
  // transition: background-color 5000s ease-in-out 0s;
}
`;

export default GlobalStyles;