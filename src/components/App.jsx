import { FeedbackPage } from '../pages/Feedbackpage';
import { Footer } from './Footer/Footer';
import React from 'react';
import GlobalStyle from 'styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

export const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <FeedbackPage />
        <Footer />
      </ThemeProvider>
    </>
  );
};
