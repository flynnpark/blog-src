import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid } from 'semantic-ui-react';
import globalConfig from '../../global-config';
import Seo from '../components/Seo';
import NavigationBar from '../components/NavigationBar';
import ProfileCard from '../components/ProfileCard';
import MiniTagsCard from '../components/MiniTagsCard';
import Footer from '../components/Footer';

const DefaultLayout = ({
  children,
  data: {
    recentTags: { tags },
  },
}) => {
  const { siteTitle, algolia } = globalConfig;
  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column',
      }}
    >
      <Seo />
      <NavigationBar siteTitle={siteTitle} algolia={algolia} />
      <Container
        style={{
          flex: 1,
          paddingTop: '6em',
        }}
      >
        <Grid stackable columns="equal">
          <Grid.Column width={13}>{children()}</Grid.Column>
          <Grid.Column width={3}>
            <ProfileCard />
            <MiniTagsCard tags={tags} />
          </Grid.Column>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.func.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      tagName: PropTypes.string.isRequired,
      postCount: PropTypes.number.isRequired,
    }).isRequired
  ),
};

export default DefaultLayout;
