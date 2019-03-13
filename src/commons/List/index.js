import React from 'react';
import PropTypes from 'prop-types';
import ListContainer from './ListContainer';
import ListItem from './ListItem';

const propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired
};

const List = ({ items, ...rest }) => {
  const listItems = items.map(item => <ListItem>{item}</ListItem>);

  return <ListContainer {...rest}>{listItems}</ListContainer>;
};

List.propTypes = propTypes;

export default List;
