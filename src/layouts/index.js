import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/header';

import globalConfig from '../../global-config';

const Layout = ({ children, data }) => {
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
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>{children()}</div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
