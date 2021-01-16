import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/Layout';
import { HEADER } from 'lib/constants';
import useRouterScroll from 'utils/useRouterScroll';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import 'styles/global.scss';
import 'styles/hamburgers.scss';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1C67CF',
      dark: '#0A3169',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

function MyApp({ Component, pageProps }) {
  useRouterScroll({ top: 0, left: 0 });

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Layout header={HEADER}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object,
};

export default MyApp;
