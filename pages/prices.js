import React from 'react';
import { SITE_NAME, PRICING_TABLE } from 'lib/constants';
import { NextSeo } from 'next-seo';
import PricingTable from 'components/PricingTable';
import PageTitle from 'components/PageTitle';

const PricesPage = () => {
  return (
    <>
      <NextSeo
        title={`Unit Sizes and Prices | ${SITE_NAME}`}
        description="Check out our available storage units and RV spaces. Call us at (541) 388-5440 for availability."
      />
      <PageTitle title="Unit Sizes and Prices" />
      <PricingTable prices={PRICING_TABLE} />
    </>
  );
};

export default PricesPage;
