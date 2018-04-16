import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Container, Grid, Segment } from 'semantic-ui-react';

import globalConfig from '../../global-config';

import NavigationBar from '../components/NavigationBar';
import ProfileCard from '../components/ProfileCard';

import 'semantic-ui-css/semantic.min.css';

const Layout = ({ children }) => {
  const { title, author, description, keywords } = globalConfig;
  return (
    <Container fluid>
      <Helmet
        title={title}
        meta={[
          { name: 'author', content: `${author}` },
          { name: 'description', content: `${description}` },
          { name: 'keywords', content: `${keywords}` },
        ]}
      />
      <NavigationBar siteTitle={title} />
      <Container style={{ marginTop: '7em' }}>
        <Grid columns="equal">
          <Grid.Column />
          <Grid.Column width={10}>{children()}</Grid.Column>
          <Grid.Column>
            <ProfileCard />
          </Grid.Column>
        </Grid>
      </Container>
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;
