import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import NavigationBar from '../components/NavigationBar';
import globalConfig from '../../global-config';

import 'semantic-ui-css/semantic.min.css';

const Layout = ({ children }) => {
  const { title, author, description, keywords } = globalConfig;
  return (
    <div>
      <Helmet
        title={title}
        meta={[
          { name: 'author', content: `${author}` },
          { name: 'description', content: `${description}` },
          { name: 'keywords', content: `${keywords}` },
        ]}
      />
      <NavigationBar siteTitle={title} />
      <div>{children()}</div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;
