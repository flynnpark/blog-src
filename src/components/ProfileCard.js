import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const ProfileCard = () => {
  return (
    <Card>
      <Image />
      <Card.Content>
        <Card.Header>Flynn (Inho Park)</Card.Header>
        <Card.Meta>Common Developer</Card.Meta>
      </Card.Content>
    </Card>
  );
};

export default ProfileCard;
