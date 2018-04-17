import React from 'react';
import Link from 'gatsby-link';
import kebabCase from 'lodash/kebabCase';
import { Card, Icon, Label } from 'semantic-ui-react';

const TagsCard = ({ data }) => {
  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>
          <Icon name="tags" />
          Tags
        </Card.Header>
      </Card.Content>
      <Card.Content>
        <Label.Group tag>
          {data.map(tag => (
            <Link
              className="ui big label"
              to={`/tags/${kebabCase(tag.fieldValue)}`}
              key={tag.fieldValue}
            >
              {tag.fieldValue}
              <Label.Detail>{tag.totalCount}</Label.Detail>
            </Link>
          ))}
        </Label.Group>
      </Card.Content>
    </Card>
  );
};

export default TagsCard;
