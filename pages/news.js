import React from 'react';
import { SITE_NAME, POSTS, DEFAULT_SIDEBAR } from 'lib/constants';
import { NextSeo } from 'next-seo';
import PageTitle from 'components/PageTitle';
import SidebarLayout from 'components/SidebarLayout';
import { NewsGrid } from 'components/News';

const NewsPage = () => {
  const { title, quotes } = DEFAULT_SIDEBAR;

  return (
    <>
      <NextSeo
        title={`News and Specials | ${SITE_NAME}`}
        description="Check out the specials and latest news for Brosterhous Storage."
      />
      <PageTitle title="News and Specials" />
      <SidebarLayout>
        <SidebarLayout.Main>
          <NewsGrid posts={POSTS} />
        </SidebarLayout.Main>
        <SidebarLayout.Sidebar title={title} quotes={quotes} />
      </SidebarLayout>
    </>
  );
};

export default NewsPage;
