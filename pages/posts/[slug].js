import React from 'react';
import PropTypes from 'prop-types';
import { SITE_NAME } from 'lib/constants';
import { getAllPosts, getPostBySlug } from 'lib/posts-api';
import remark from 'remark';
import html from 'remark-html';
import { NewsPost } from 'components/News';
import { NextSeo } from 'next-seo';

const PostPage = ({
  title, description, date, content, coverImage,
}) => {
  return (
    <>
      <NextSeo
        title={`${title} | ${SITE_NAME}`}
        description={description}
      />
      <NewsPost
        title={title}
        date={date}
        content={content}
        coverImage={coverImage}
      />
    </>
  );
};

export const getStaticPaths = () => {
  const posts = getAllPosts();
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const slug = context?.params?.slug;
  const post = getPostBySlug(slug);
  if (!post) return { props: {} };

  const {
    title, description, date, coverImage,
  } = post;

  let content = await remark().use(html).process(post.content);
  content = content.toString();

  return {
    props: {
      title, description, date, coverImage, content,
    },
  };
};

PostPage.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  coverImage: PropTypes.string,
  content: PropTypes.string,
};

export default PostPage;
