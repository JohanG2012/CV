import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import List from '../../commons/List';

const propTypes = {
  skills: PropTypes.arrayOf(PropTypes.object).isRequired
};

const Skills = ({ skills }) => {
  const skillSet = skills
    .filter(skill => skill.show)
    .map(set => {
      const skillstext = set.skills.join(', ');
      return (
        <Fragment>
          <span style={{ fontWeight: 'bold' }}>{set.title}:</span> {skillstext}
        </Fragment>
      );
    });

  return <List items={skillSet} />;
};

Skills.propTypes = propTypes;

export default Skills;
