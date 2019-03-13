import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Title from '../../commons/Title';
import Body from './Body';
import Seperator from './Seperator';

const propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  noBar: PropTypes.bool.isRequired,
  rightPadding: PropTypes.string
};

const defaultProps = {
  rightPadding: 0
};

const Section = ({ title, children, noBar, rightPadding }) => (
  <Fragment>
    <Title>{title}</Title>
    {!noBar && <Seperator />}
    <Body rightPadding={rightPadding}>{children}</Body>
  </Fragment>
);

Section.defaultProps = defaultProps;
Section.propTypes = propTypes;

export default Section;
