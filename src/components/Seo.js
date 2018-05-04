import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import globalConfig from '../../global-config';

const Seo = props => {
  const { data } = props;
  const postTitle = ((data || {}).frontmatter || {}).title;
  const postDescription = ((data || {}).frontmatter || {}).description;
  const postCover = ((data || {}).frontmatter || {}).cover;
  const postSlug = ((data || {}).fields || {}).slug;

  const title = postTitle
    ? `${postTitle} - ${globalConfig.siteTitle}`
    : globalConfig.siteTitle;
  const description = postDescription
    ? postDescription
    : globalConfig.siteDescription;
  const image = postCover ? postCover : globalConfig.siteImage;
  const url = globalConfig.siteUrl + globalConfig.pathPrefix + postSlug;

  return (
    <Helmet
      htmlAttributes={{
        lang: globalConfig.siteLanguage,
        prefix: 'og: http://ogp.me/ns#',
      }}
    >
      {/* General tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="theme-color" content="#1B1C1D" />
      {/* OpenGraph tags */}
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
};

Seo.propTypese = {
  data: PropTypes.object,
};

export default Seo;
