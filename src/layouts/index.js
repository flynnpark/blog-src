import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { Container, Grid } from 'semantic-ui-react';
import globalConfig from '../../global-config';
import NavigationBar from '../components/NavigationBar';
import ProfileCard from '../components/ProfileCard';
import MiniTagsCard from '../components/MiniTagsCard';
import 'semantic-ui-css/semantic.min.css';

const Layout = ({
  tagCardVisible,
  children,
  data: {
    allMarkdownRemark: { group },
  },
}) => {
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
      <Container style={{ marginTop: '6em' }}>
        <Grid columns="equal">
          <Grid.Column width={13}>{children()}</Grid.Column>
          <Grid.Column width={3}>
            <ProfileCard />
            {tagCardVisible && <MiniTagsCard data={group} />}
          </Grid.Column>
        </Grid>
      </Container>
    </Container>
  );
};

Layout.propTypes = {
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
  query IndexTagsQuery {
    allMarkdownRemark {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
