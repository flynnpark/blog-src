import React from 'react';
import PropTypes from 'prop-types';
import { Container, Button } from 'semantic-ui-react';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import globalConfig from '../../global-config';

const PostShare = ({ postNode }) => {
  const {
    fields: { slug },
    frontmatter: { title },
  } = postNode;
  const url = globalConfig.siteUrl + slug;
  return (
    <Container textAlign="center" style={{ paddingBottom: '2em' }}>
      <Button
        as={FacebookShareButton}
        circular
        color="facebook"
        icon="facebook"
        aria-label="Facebook Share"
        url={url}
        quote={title}
      />
      <Button
        as={TwitterShareButton}
        circular
        color="twitter"
        icon="twitter"
        aria-label="Twitter Share"
        url={url}
        title={title}
      />
    </Container>
  );
};

export default PostShare;
