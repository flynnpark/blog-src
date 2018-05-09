import React from 'react';
import { Container, Segment, List } from 'semantic-ui-react';

const Footer = () => {
  return (
    <Segment vertical style={{ marginTop: '1.5em' }}>
      <Container textAlign="center">
        <List horizontal list>
          <List.Item>© 2018 Flynn (Inho Park)</List.Item>
          <List.Item>
            Built with{' '}
            <strong>
              <a href="https://www.gatsbyjs.org/" target="_blank">
                Gatsby
              </a>
            </strong>{' '}
            &{' '}
            <strong>
              <a href="https://reactjs.org/" target="_blank">
                React
              </a>
            </strong>
          </List.Item>
          <List.Item>
            Hosted by{' '}
            <strong>
              <a href="https://www.netlify.com/" target="_blank">
                Netlify
              </a>
            </strong>
          </List.Item>
          <List.Item>
            Source code on{' '}
            <strong>
              <a href="https://github.com/wphestiraid/blog-src" target="_blank">
                Github
              </a>
            </strong>
          </List.Item>
        </List>
      </Container>
    </Segment>
  );
};

export default Footer;
