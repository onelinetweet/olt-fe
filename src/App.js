import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import ApplicationRoutes from './components/ApplicationRoutes';
import { getAuth, signInAnonymously } from 'firebase/auth';
import Typed from 'typed.js';
import FullPageLoader from './components/FullPageLoader';

const App = () => {
  const [user, setUser] = useState();
  const auth = getAuth();
  useEffect(() => {
    signInAnonymously(auth)
      .then((user) => {
        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }, []);

  return (
    <>
      {user ? (
        <WithLanding>
          <ApplicationRoutes />
        </WithLanding>
      ) : (
        <FullPageLoader />
      )}
    </>
  );
};

const WithLanding = ({ children }) => {
  const el = useRef(null);
  // Create reference to store the Typed instance itself
  const typed = useRef(null);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const options = {
      strings: ['One', 'Line', 'Tweet', 'One Line Tweet'],
      typeSpeed: 50,
      backSpeed: 50,
      onComplete: () => setIsCompleted(true),
    };
    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  return isCompleted ? (
    children
  ) : (
    <div className='absolute top-0 left-0 right-0 bottom-0 min-h-screen min-w-screen flex items-center justify-center dark:bg-black bg-white fade duration-1000'>
      <div className='type-wrap'>
        <span
          style={{ whiteSpace: 'pre' }}
          ref={el}
          className='text-4xl text-blue-500 font-semibold'
        />
      </div>
    </div>
  );
};

export default App;
