import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/Layout';
import { HEADER } from 'lib/constants';
import 'styles/global.scss';
import 'styles/hamburgers.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Layout header={HEADER}>
      <Component {...pageProps} />
    </Layout>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object,
};

export default MyApp;
