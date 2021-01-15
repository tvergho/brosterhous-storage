import React from 'react';
import { SITE_NAME, HOME_IMAGES } from 'lib/constants';
import { NextSeo } from 'next-seo';
import { Carousel } from 'components/Home';

const Home = () => {
  return (
    <>
      <NextSeo
        title={`Home | ${SITE_NAME}`}
        description="Ready for some spring cleaning? We'll make sure your extra furniture, files, or appliances are safely stored until you need them again."
      />
      <Carousel width="100%" height="100%" images={HOME_IMAGES} />
    </>
  );
};

export default Home;
