import React from 'react';
import { SITE_NAME } from 'lib/constants';
import { NextSeo } from 'next-seo';

const Home = () => {
  return (
    <>
      <NextSeo
        title={`Home | ${SITE_NAME}`}
        description="Description."
      />
    </>
  );
};

export default Home;
