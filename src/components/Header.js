import React, { useState } from 'react';
import CreateTweetModal from './CreateTweetModal';
const Header = () => {
  const [show, setShow] = useState(false);
  const showTweetModal = () => {
    setShow(true);
  };

  const onClickClose = () => {
    setShow(false);
  };

  return (
    <header className='flex justify-between items-center p-4'>
      <h5 className='text-blue-500 text-lg font-semibold'>
        <a href='/'>One line tweet</a>{' '}
      </h5>
      <div>
        <button
          className='bg-blue-500 rounded px-3 py-2 text-white font-semibold'
          onClick={showTweetModal}
        >
          Create tweet
        </button>
        {show && <CreateTweetModal onClickClose={onClickClose} />}
      </div>
    </header>
  );
};

export default Header;
