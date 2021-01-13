import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/Layout';
import { HEADER } from 'lib/constants';
import useRouterScroll from 'utils/useRouterScroll';
import 'styles/global.scss';
import 'styles/hamburgers.scss';

function MyApp({ Component, pageProps }) {
  useRouterScroll({ top: 0, left: 0 });

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
