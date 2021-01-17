import React from 'react';
import { SITE_NAME, PRICING_TABLE, PHONE } from 'lib/constants';
import { NextSeo } from 'next-seo';
import PricingTable from 'components/PricingTable';
import PageTitle from 'components/PageTitle';

const PricesPage = () => {
  return (
    <>
      <NextSeo
        title={`Unit Sizes and Prices | ${SITE_NAME}`}
        description={`Check out our available storage units and RV spaces. Units start at $58/month. Call us at ${PHONE} for availability.`}
      />
      <PageTitle title="Unit Sizes and Prices" />
      <PricingTable prices={PRICING_TABLE} />
    </>
  );
};

export default PricesPage;
