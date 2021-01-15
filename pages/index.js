import React from 'react';
import { SITE_NAME, HOME_IMAGES, PRICING_TABLE } from 'lib/constants';
import { NextSeo } from 'next-seo';
import { Carousel } from 'components/Home';
import PricingTable from 'components/PricingTable';

const Home = () => {
  return (
    <>
      <NextSeo
        title={`Home | ${SITE_NAME}`}
        description="Ready for some spring cleaning? We'll make sure your extra furniture, files, or appliances are safely stored until you need them again."
      />
      <Carousel width="100%" height="100%" images={HOME_IMAGES} />
      <PricingTable prices={PRICING_TABLE} />
    </>
  );
};

export default Home;
