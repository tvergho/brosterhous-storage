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
        description="Brosterhous Storage in Bend, OR offers storage for your extra furniture, files, or appliances until you need them again. Reserve units starting at $58/month."
      />
      <Carousel width={1024} height={isMobile ? '100%' : 416} images={HOME_IMAGES} />
      <PricingTable prices={PRICING_TABLE} />
    </>
  );
};

export default Home;
