import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import kebabCase from 'lodash/kebabCase';
import { Header, Icon, Label } from 'semantic-ui-react';

const TagsCard = ({ tags, totalCount }) => {
  return (
    <div>
      <Header as="h1">
        Tags<Header.Subheader>
          A collection of {totalCount} tag{totalCount === 1 ? '' : 's'}
        </Header.Subheader>
      </Header>
      <Label.Group tag style={{ marginTop: '2.5em' }}>
        {tags.map(tag => (
          <Link
            className="ui large label"
            key={tag.fieldValue}
            to={`/tags/${kebabCase(tag.fieldValue)}`}
          >
            {tag.fieldValue}
            <Label.Detail>{tag.totalCount}</Label.Detail>
          </Link>
        ))}
      </Label.Group>
    </div>
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
