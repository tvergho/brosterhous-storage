import React from 'react';
import { SITE_NAME, DEFAULT_SIDEBAR } from 'lib/constants';
import { getAllPosts } from 'lib/posts-api';
import { NextSeo } from 'next-seo';
import PageTitle from 'components/PageTitle';
import SidebarLayout from 'components/SidebarLayout';
import { NewsGrid } from 'components/News';

const NewsPage = ({ posts }) => {
  const { title, quotes } = DEFAULT_SIDEBAR;

  return (
    <>
      <NextSeo
        title={`News and Specials | ${SITE_NAME}`}
        description="Check out the specials and latest news for Brosterhous Storage, located in Bend, OR."
      />
      <PageTitle title="News and Specials" />
      <SidebarLayout>
        <SidebarLayout.Main>
          <NewsGrid posts={posts} />
        </SidebarLayout.Main>
        <SidebarLayout.Sidebar title={title} quotes={quotes} />
      </SidebarLayout>
    </>
  );
};

export const getStaticProps = () => {
  const posts = getAllPosts();

  return {
    props: { posts },
  };
};

export default NewsPage;
