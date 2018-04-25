import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { Header, Label } from 'semantic-ui-react';

const SearchItem = props => {
  console.log(props);
  const {
    currentResult: { id, title },
    rawResults,
    postsInfo,
  } = props;
  const tags = rawResults[id].tags;
  const rawId = rawResults[id].id;
  return (
    <div>
      {postsInfo
        .filter(postInfo => postInfo.node.id === rawId)
        .map(({ node }, index) => (
          <Link to={node.fields.slug} key={index}>
            <Header as="h5">{title}</Header>
            <Label.Group>
              {tags.map((tag, index) => (
                <Label key={index} size="mini">
                  {tag}
                </Label>
              ))}
            </Label.Group>
          </Link>
        ))}
    </div>
  );
};

SearchItem.propTypes = {
  currentResult: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }),
  simpleResults: PropTypes.array,
  rawResults: PropTypes.array,
  postsInfo: PropTypes.array,
};

export default SearchItem;
