import React, { useEffect, useState } from 'react';
import { useSocket } from '../providers/SocketProvider';
import TweetList from './TweetList';
const LiveTweets = ({ data }) => {
  const [tweets, setTweets] = useState([]);

  const socket = useSocket();

  useEffect(() => {
    socket.on('tweet', (data) => {
      setTweets((prev) => [data, ...prev.slice(0, 10)]);
    });

    return () => socket.off('tweet');
  }, []);

  return (
    <div>
      <TweetList data={tweets} />
    </div>
  );
};
export default LiveTweets;
