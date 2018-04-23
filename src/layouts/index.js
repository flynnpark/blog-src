import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { Container, Grid } from 'semantic-ui-react';
import globalConfig from '../../global-config';
import NavigationBar from '../components/NavigationBar';
import ProfileCard from '../components/ProfileCard';
import MiniTagsCard from '../components/MiniTagsCard';
import Footer from '../components/Footer';
import 'semantic-ui-css/semantic.min.css';

const Layout = ({
  children,
  data: {
    allMarkdownRemark: { tags },
  },
}) => {
  const { siteTitle, author, description, keywords } = globalConfig;
  return (
    <Container fluid>
      <Helmet
        title={siteTitle}
        meta={[
          { name: 'author', content: `${author}` },
          { name: 'description', content: `${description}` },
          { name: 'keywords', content: `${keywords}` },
        ]}
      />
      <NavigationBar siteTitle={siteTitle} />
      <Container style={{ marginTop: '6em' }}>
        <Grid stackable columns="equal">
          <Grid.Column width={13}>{children()}</Grid.Column>
          <Grid.Column width={3}>
            <ProfileCard />
            <MiniTagsCard tags={tags} />
            <Footer />
          </Grid.Column>
        </Grid>
      </Container>
    </Container>
  );
};

Layout.propTypes = {
  data: PropTypes.object.isRequired,
  children: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => {
  const { tagCardVisible } = state;
  return {
    tagCardVisible,
  };
};

export default connect(mapStateToProps)(Layout);

export const query = graphql`
  query LayoutQuery {
    allMarkdownRemark(limit: 20) {
      tags: group(field: frontmatter___tags) {
        tagName: fieldValue
        postCount: totalCount
      }
    }
  }
`;
