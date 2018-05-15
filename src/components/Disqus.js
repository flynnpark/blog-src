import React from 'react';
import PropTypes from 'prop-types';
import ReactDisqusComments from 'react-disqus-comments';
import globalConfig from '../../global-config';

const Disqus = ({ postNode }) => {
  const post = postNode.frontmatter;
  const url = globalConfig.siteUrl + postNode.fields.slug;
  return (
    <ReactDisqusComments
      shortname={globalConfig.disqusShortname}
      identifier={postNode.fields.slug}
      title={post.title}
      url={url}
    />
  );
};

Disqus.propTypes = {
  postNode: PropTypes.shape({
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }).isRequired,
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
  }),
};

export default Disqus;
