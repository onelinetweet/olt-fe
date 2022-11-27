import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js';
const ApplicationLoader = () => {
  const el = useRef(null);
  // Create reference to store the Typed instance itself
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['One', 'Line', 'Tweet', 'One Line Tweet'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };
    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
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

export default ApplicationLoader;
