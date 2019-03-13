import React from 'react';
import PropTypes from 'prop-types';
import Container from './Container';
import Link from '../../commons/Link';
import Text from '../../commons/Text';

const propTypes = {
  email: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired
};

const Social = ({ email, github, linkedin }) => (
  <Container>
    <Text inline>
      Email: <Link href="#">{email} </Link>
    </Text>
    <Text inline>
      GitHub: <Link href={github}> {github}</Link>
    </Text>
    <br />
    <Text inline>
      LinkedIn: <Link href={linkedin}> {linkedin}</Link>
    </Text>
  </Container>
);

Social.propTypes = propTypes;

export default Social;
