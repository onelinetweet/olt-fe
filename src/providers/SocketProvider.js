import React, {
  useState,
  useMemo,
  useContext,
  createContext,
  useEffect,
} from 'react';
import { io } from 'socket.io-client';

const socket = io(process.env.REACT_APP_SERVER_WEB_SOCKET_URL, {
  secure: true,
  // transports: ['websocket'],
});
export const SocketContext = createContext(socket);

export const ACTION_CREATE_TWEET = 'ACTION::CREATE::TWEET';
export const ACTION_DELETE_TWEET = 'ACTION::DELETE::TWEET';

export const actionCreateTweet = (payload) => {
  return {
    action: ACTION_CREATE_TWEET,
    payload,
  };
};

export const actionDeleteTweet = (payload) => {
  return {
    action: ACTION_DELETE_TWEET,
    payload,
  };
};
// socket.on('connect_error', err => {
//   console.log(`connect_error ${err}`);
// })

// socket.on('recconnect', () => {
//   console.log('reconnect');
// });

// socket.on('connect', () => {
// });

// socket.on('disconnect', () => {
//   console.log('disconnect');
// });

// socket.on('announcement', (data) => {
//   console.log(data);
// });

const SocketProvider = ({ children }) => {
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export const useSocket = () => {
  const context = useContext(SocketContext);
  if (context === undefined) {
    throw new Error('useSocket must be used within SocketProvider');
  }
  return context;
};

export default SocketProvider;
