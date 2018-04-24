import React from 'react';
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

export default Disqus;
