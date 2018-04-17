import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Container } from 'semantic-ui-react';
import globalConfig from '../../global-config';
import NavigationBar from '../components/NavigationBar';
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
      <Container style={{ marginTop: '6em' }}>{children()}</Container>
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;
