import React from 'react';
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
    siteSearchIndex,
    recentTags: { tags },
    allPosts: { posts },
  },
}) => {
  const { siteTitle } = globalConfig;
  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column',
      }}
    >
      <Seo />
      <NavigationBar
        siteTitle={siteTitle}
        postsInfo={posts}
        searchData={siteSearchIndex}
      />
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

export default DefaultLayout;
