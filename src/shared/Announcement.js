import React, { useEffect, useContext, useState, useMemo } from 'react';
import SocketProvider, {
  useSocket,
  SocketContext,
} from '../providers/SocketProvider';
import { io } from 'socket.io-client';
const Announcement = () => {
  const [announcements, setAnnouncements] = useState([]);
  const socket = useSocket();
  useEffect(() => {
    socket.on('announcement', (data) => {
      setAnnouncements((prev) => [...prev, data]);
    });
    return () => socket.off('announcement');
  }, [socket]);

  // Remove some of the announcement if your list is long every one minute
  useEffect(() => {
    const interval = setInterval(() => {}, 1000);

    return () => clearInterval(interval);
  }, []);

  const singleLineAnnouncement = useMemo(() => {
    let sla = '';
    return [announcements].map((a) => sla + a);
  }, [announcements]);

  return <div className=''>{singleLineAnnouncement}</div>;
};

export default Announcement;
