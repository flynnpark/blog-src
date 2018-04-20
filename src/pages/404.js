import React from 'react';
import Link from 'gatsby-link';
import { Header, Breadcrumb, Divider, Button, Icon } from 'semantic-ui-react';

const NotFoundPage = () => (
  <div>
    <Breadcrumb>
      <Link className="section" to="/">
        Home
      </Link>
      <Breadcrumb.Divider icon="right angle" />
      <Breadcrumb.Section active>404 Not Found</Breadcrumb.Section>
    </Breadcrumb>
    <Header as="h1">
      404 Not Found
      <Header.Subheader>
        You just hit a route that doesn&#39;t exist... the sadness.
      </Header.Subheader>
    </Header>
    <Divider />
    <Button icon labelPosition="left" color="blue">
      <Icon name="home" />
      Return to Home
    </Button>
  </div>
);

export default NotFoundPage;
