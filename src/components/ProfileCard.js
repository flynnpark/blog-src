import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';

import globalConfig from '../../global-config';
import profileImage from '../images/profile_image.png';

const ProfileCard = () => {
  const { nickname, realname, job, github } = globalConfig;

  return (
    <Card fluid>
      <Image src={profileImage} alt="프로필 이미지" />
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
