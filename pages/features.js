import React from 'react';
import { SITE_NAME, DEFAULT_SIDEBAR } from 'lib/constants';
import { NextSeo } from 'next-seo';
import PageTitle from 'components/PageTitle';
import { FeatureItem } from 'components/Features';
import SidebarLayout from 'components/SidebarLayout';

const FeaturesPage = () => {
  const { title, quotes } = DEFAULT_SIDEBAR;

  return (
    <>
      <NextSeo
        title={`Features | ${SITE_NAME}`}
        description="We offer drive-up access, residential and business storage, and parking for RVs, boats, and motorcycles."
      />
      <PageTitle title="Features" />
      <SidebarLayout>
        <SidebarLayout.Main>
          <FeatureItem
            image="/feature-1.jpg"
            title="Drive Up Access"
            description="You’ll never need to worry about lugging your items to and from your storage space. Just drive your car up to your door and start unloading."
          />
          <FeatureItem
            image="/feature-2.jpg"
            title="Residential Storage"
            description="Ready for some spring cleaning? We’ll make sure your extra furniture, files, or appliances are safely stored until you need them again."
          />
          <FeatureItem
            image="/feature-3.jpg"
            title="Business Storage"
            description="Whether you are looking to free up space in your office or are stocking supplies for the future, we have the convenient and secure space to meet all of your storage needs."
          />
          <FeatureItem
            image="/feature-4.jpg"
            title="RV / Boat / Motorcycles / Vehicle Storage"
            description="Many consumers just don’t have the space to park such recreational vehicles at home or local HOA regulations may prohibit them from doing so.
            Brosterhous Storage is an ideal solution – RVs and boats cost a lot of money and Brosterhous Storage will help you keep them safe for those times when you don’t need to use them."
          />
        </SidebarLayout.Main>
        <SidebarLayout.Sidebar title={title} quotes={quotes} />
      </SidebarLayout>
    </>
  );
};

export default FeaturesPage;
