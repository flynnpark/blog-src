import React from 'react';
import { Container, Segment } from 'semantic-ui-react';

const Footer = () => {
  return (
    <Segment vertical style={{ marginTop: '1.5em' }}>
      <Container textAlign="center">
        © 2018 Flynn (Inho Park) / Built with Gatsby and React / Hosted by
        Netlify
      </Container>
    </Segment>
  );
};

export default Footer;
