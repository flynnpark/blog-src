import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';

import globalConfig from '../../global-config';

const ProfileCard = () => {
  const { nickname, realname, job, github } = globalConfig;

  return (
    <Card>
      <Image />
      <Card.Content>
        <Card.Header>
          {nickname} ({realname})
        </Card.Header>
        <Card.Meta>{job}</Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <a href={`https://github.com/${github}`} target="_blank">
          <Icon name="github" />
          {github}
        </a>
      </Card.Content>
    </Card>
  );
};

export default ProfileCard;
