import React from 'react';
import { SITE_NAME, DEFAULT_SIDEBAR } from 'lib/constants';
import { NextSeo } from 'next-seo';
import PageTitle from 'components/PageTitle';
import SidebarLayout from 'components/SidebarLayout';
import { Questions } from 'components/FAQs';

const FAQPage = () => {
  const { title, quotes } = DEFAULT_SIDEBAR;

  return (
    <>
      <NextSeo
        title={`Frequently Asked Questions | ${SITE_NAME}`}
        description="Get answers to your frequently asked questions here."
      />
      <PageTitle title="Frequently Asked Questions" />
      <SidebarLayout>
        <SidebarLayout.Main>
          <Questions />
        </SidebarLayout.Main>
        <SidebarLayout.Sidebar title={title} quotes={quotes} />
      </SidebarLayout>
    </>
  );
};

export default FAQPage;
