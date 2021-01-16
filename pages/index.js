import React from 'react';
import { SITE_NAME, HOME_IMAGES, PRICING_TABLE } from 'lib/constants';
import { NextSeo } from 'next-seo';
import useWindowSize from 'utils/useWindowSize';
import { Carousel } from 'components/Home';
import PricingTable from 'components/PricingTable';

const Home = () => {
  const { isMobile } = useWindowSize();
  return (
    <>
      <NextSeo
        title={`Home | ${SITE_NAME}`}
        description="Ready for some spring cleaning? We'll make sure your extra furniture, files, or appliances are safely stored until you need them again."
      />
      <Carousel width={1024} height={isMobile ? '100%' : 416} images={HOME_IMAGES} />
      <PricingTable prices={PRICING_TABLE} />
    </>
  );
};

export default Home;
