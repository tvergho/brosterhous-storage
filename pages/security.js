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
        <SidebarLayout.Main>
          <p>The security of your possessions is our primary concern.
            Our facilities are safeguarded behind 7 foot fencing topped with barb wire and extensive lighting, and our entire facility is under constant 24 hour closed circuit camera surveillance.
          </p>

          <h2>You Lock It, You Keep the Key</h2>
          <p>You can be sure your space is private and secure as you are the only person with the key to your storage space.</p>

          <h2>Daily Computerized Gate Entry</h2>
          <p>Access your storage unit when you need it. To enter or exit the facility, each tenant receives a personalized security code to be entered into a lighted key pad at the main entrance gate.
            This helps ensure that only tenants have access to the property. The system records all entries and exits.
            Enter your unique access code at the front gate to enter the Brosterhous Storage facility from 5:30am-10pm each day.
          </p>
        </SidebarLayout.Main>
        <SidebarLayout.Sidebar title={title} quotes={quotes} />
      </SidebarLayout>
    </>
  );
};

export default SecurityPage;
