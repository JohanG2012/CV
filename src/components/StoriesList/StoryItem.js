import React from 'react';
import PropTypes from 'prop-types';
import SubTitle from './SubTitle';
import Date from './Date';
import List from '../../commons/List';
import Text from '../../commons/Text';
import Link from '../../commons/Link';

const propTypes = {
  story: PropTypes.shape({
    title: PropTypes.string,
    since: PropTypes.string,
    subtitle: PropTypes.string,
    tasks: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  width: PropTypes.string.isRequired
};

const StoryItem = ({ story, width }) => (
  <div style={{ margin: '0 0 10px 0' }}>
    <Text bold inline>
      {story.title}
    </Text>
    <Date>
      {story.since} - {story.until}
    </Date>
    <SubTitle>
      {story.subtitle} - {story.location} {story.employment && `- ${story.employment}`}
    </SubTitle>
    {story.links && story.links.map(link => <Link href={link.href}>{link.text}</Link>)}
    <List styleType items={story.tasks} width={width} />
  </div>
);

StoryItem.propTypes = propTypes;

export default StoryItem;
