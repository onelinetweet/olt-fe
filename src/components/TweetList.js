import React from 'react';
import TweetListItem from './TweetListItem';
const TweetList = ({ data }) => {
  return (
    <div className='p-4 flex flex-col gap-4'>
      {data.map((d) => (
        <>
          <TweetListItem key={d.uuid} title={d.text} />
        </>
      ))}
    </div>
  );
};

export default TweetList;
