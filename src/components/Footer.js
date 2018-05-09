import React from 'react';
import { Container, Segment } from 'semantic-ui-react';

const Footer = () => {
  return (
    <Segment vertical style={{ marginTop: '1.5em' }}>
      <Container textAlign="center">
        © 2018 Flynn (Inho Park) · Built with{' '}
        <a href="https://www.gatsbyjs.org/" target="_blank">
          Gatsby
        </a>{' '}
        &{' '}
        <a href="https://reactjs.org/" target="_blank">
          React
        </a>{' '}
        · Hosted by{' '}
        <a href="https://www.netlify.com/" target="_blank">
          Netlify
        </a>{' '}
        · Source code on{' '}
        <a href="https://github.com/wphestiraid/blog-src" target="_blank">
          Github
        </a>
      </Container>
    </Segment>
  );
};

export default Footer;
