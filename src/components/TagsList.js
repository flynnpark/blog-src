import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import kebabCase from 'lodash/kebabCase';
import { Icon, Label } from 'semantic-ui-react';

const TagsCard = ({ tags }) => {
  return (
    <Label.Group tag>
      {tags.map(tag => (
        <Link
          className="ui big label"
          key={tag.fieldValue}
          to={`/tags/${kebabCase(tag.fieldValue)}`}
        >
          {tag.fieldValue}
          <Label.Detail>{tag.totalCount}</Label.Detail>
        </Link>
      ))}
    </Label.Group>
  );
};

TagsCard.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      fieldValue: PropTypes.string.isRequired,
      totalCount: PropTypes.number.isRequired,
    }).isRequired
  ),
};

export default TagsCard;
