import React from 'react';
import { SITE_NAME, DEFAULT_SIDEBAR } from 'lib/constants';
import { NextSeo } from 'next-seo';
import PageTitle from 'components/PageTitle';
import SidebarLayout from 'components/SidebarLayout';

const SecurityPage = () => {
  const { title, quotes } = DEFAULT_SIDEBAR;

  return (
    <>
      <NextSeo
        title={`Security | ${SITE_NAME}`}
        description="The security of your possessions is our primary concern. Our facilities are safeguarded behind 7 foot fencing topped with barb wire and extensive lighting."
      />
      <PageTitle title="Security" />
      <SidebarLayout>
        <SidebarLayout.Main />
        <SidebarLayout.Sidebar title={title} quotes={quotes} />
      </SidebarLayout>
    </>
  );
};

export default SecurityPage;
