import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import kebabCase from 'lodash/kebabCase';
import { Card, Icon, Label } from 'semantic-ui-react';

const MiniTagsCard = ({ tags }) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>
          <Link to="/tags">
            <Icon name="tags" size="small" />
            Tags
          </Link>
        </Card.Header>
      </Card.Content>
      <Card.Content>
        <Label.Group size="small">
          {tags.map(tag => (
            <Link
              className="ui label"
              to={`/tags/${kebabCase(tag.tagName)}`}
              key={tag.tagName}
            >
              {tag.tagName}
              <Label.Detail>{tag.postCount}</Label.Detail>
            </Link>
          ))}
        </Label.Group>
      </Card.Content>
    </Card>
  );
};

MiniTagsCard.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      tagName: PropTypes.string.isRequired,
      postCount: PropTypes.number.isRequired,
    }).isRequired
  ),
};

export default MiniTagsCard;
