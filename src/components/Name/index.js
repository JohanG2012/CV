import React from 'react';
import PropTypes from 'prop-types';
import FirstName from './FirstName';
import LastName from './LastName';

const propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
};

const Name = ({ firstName, lastName }) => (
  <FirstName>
    {firstName}
    <LastName> {lastName}</LastName>
  </FirstName>
);

Name.propTypes = propTypes;

export default Name;
