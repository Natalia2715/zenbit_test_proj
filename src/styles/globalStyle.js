import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Apercu Arabic Pro';

}
body {
  margin: 0;
  background-color: ${p => p.theme.colors.background};
  font-family: Apercu Arabic Pro, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
body,
h1,
h2,
p,
li {
  margin: 0;
  padding: 0;
}
input,
button,
textarea,
select {
  font: inherit;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
a {
  text-decoration: none;
  font-style: normal;
  color: inherit;
  display: block;
}
`;

export default GlobalStyle;
