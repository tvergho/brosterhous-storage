import React from 'react';
import {
  SITE_NAME, PHONE, EMAIL, ADDRESSES, HOURS,
} from 'lib/constants';
import { NextSeo } from 'next-seo';
import Contact from 'components/Contact';
import PageTitle from 'components/PageTitle';

const ContactPage = () => {
  return (
    <>
      <NextSeo
        title={`Contact Us | ${SITE_NAME}`}
        description={`Call us at ${PHONE} or email us at ${EMAIL}.`}
      />
      <PageTitle title="Contact Us" />
      <Contact phone={PHONE} email={EMAIL} address={ADDRESSES} hours={HOURS} />
    </>
  );
};

export default ContactPage;
