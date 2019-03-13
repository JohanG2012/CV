import React from 'react';
import PropTypes from 'prop-types';
import List from '../../commons/List';
import FlexBox from '../../commons/FlexBox';

const propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired
};

const ExpertiseList = ({ items }) => {
  if (items.length > 10) {
    items.splice(10, items.length);
  }

  const listOne = items.slice(0, 5);
  const listTwo = items.slice(5, 10);

  return (
    <FlexBox space="space-around">
      <List styleType items={listOne} />
      <List styleType items={listTwo} />
    </FlexBox>
  );
};

ExpertiseList.propTypes = propTypes;

export default ExpertiseList;
