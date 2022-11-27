import React from 'react';
import TweetList from './TweetList';

const TweetListItem = ({ title }) => {
  return <div className='shadow rounded p-2 dark:shadow-white'>{title}</div>;
};

export default TweetListItem;
