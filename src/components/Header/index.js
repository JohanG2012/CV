import React from 'react';
import PropTypes from 'prop-types';
import Bar from '../../commons/Bar';
import Name from '../Name';
import Social from '../Social';
import SubTitle from '../../commons/SubTitle';

const propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

const Header = ({ firstName, lastName, title, email, github, linkedin }) => (
  <div>
    <Bar />
    <Name firstName={firstName} lastName={lastName} />
    <SubTitle>{title}</SubTitle>
    <Social email={email} github={github} linkedin={linkedin} />
  </div>
);

Header.propTypes = propTypes;

export default Header;
