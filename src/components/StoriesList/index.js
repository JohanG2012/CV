import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import StoryItem from './StoryItem';

const propTypes = {
  experience: PropTypes.arrayOf(PropTypes.object).isRequired,
  width: PropTypes.string
};

const defaultProps = {
  width: 'auto'
};

const StoriesList = ({ experience, width }) => {
  const stories = experience.map(story => <StoryItem width={width} story={story} />);

  return <Fragment>{stories}</Fragment>;
};

StoriesList.defaultProps = defaultProps;
StoriesList.propTypes = propTypes;

export default StoriesList;
