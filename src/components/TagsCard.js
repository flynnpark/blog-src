import React from 'react';
import { Card, Icon, Label } from 'semantic-ui-react';

const TagsCard = ({ data }) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>
          <Icon name="tags" size="small" />
          Tags
        </Card.Header>
      </Card.Content>
      <Card.Content>
        <Label.Group size="small">
          {data.map(tagInfo => (
            <Label key={tagInfo.fieldValue}>
              {tagInfo.totalCount}
              <Label.Detail>{tagInfo.fieldValue}</Label.Detail>
            </Label>
          ))}
        </Label.Group>
      </Card.Content>
    </Card>
  );
};

export default TagsCard;
