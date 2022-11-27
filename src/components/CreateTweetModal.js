import { Field, Form, Formik } from 'formik';
import React, { useEffect, useRef } from 'react';
import * as Yup from 'yup';
import { Navigate, useNavigate } from 'react-router-dom';
import { useOnClickOutside } from '../hooks/useOnClickOutside';
import { useSocket } from '../providers/SocketProvider';

const NewTweetSchema = Yup.object().shape({
  text: Yup.string()
    .min(2, 'Too Short!')
    .max(100, 'Too Long!')
    .required('Required'),
});

const CreateTweetModal = ({ title, onClickClose }) => {
  const socket = useSocket();
  const navigate = useNavigate();
  const modalRef = useRef(null);
  useOnClickOutside(modalRef, onClickClose);
  const clickTweet = () => {
    socket.emit('tweet');
  };

  useEffect(() => {}, []);

  const navigateTo = (path, options) => {
    navigate(path, options);
    onClickClose();
  };

  return (
    <div className='absolute top-0 left-0 right-0 bottom-0'>
      <div className='w-screen h-screen  bg-black bg-opacity-20 flex items-center justify-center'>
        <div
          className='rounded dark:bg-slate-900 dark:text-gray-500 bg-white text-black shadow p-4 max-w-lg w-full'
          ref={modalRef}
        >
          <header className='flex items-center justify-between'>
            <div className='text-blue-500'>Tweet</div>
            <button onClick={onClickClose}>Close</button>
          </header>
          <main className='py-3'>
            <Formik
              initialValues={{
                text: '',
              }}
              validationSchema={NewTweetSchema}
              onSubmit={(values) => {
                socket.emit('tweet:create', values);
                onClickClose();
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className='mb-3'>
                    <Field
                      name='text'
                      type='text'
                      autoFocus={true}
                      placeholder='Tweet to the world!'
                      className='outline-none w-full bg-transparent'
                    />
                    {touched.text && errors.text && (
                      <div className='text-sm text-red-500'>{errors.text}</div>
                    )}
                  </div>
                  <button
                    type='submit'
                    className='w-full bg-blue-500 px-3 py-2 text-white rounded mb-3'
                  >
                    Tweet
                  </button>
                </Form>
              )}
            </Formik>
            <div className='text-xs'>
              By clicking on submit you agree that you have agreed to our{' '}
              <span
                className='text-blue-500 cursor-pointer'
                onClick={() => navigateTo('/terms')}
              >
                terms and condition
              </span>{' '}
              and acknowledge that you have read our{' '}
              <span
                className='text-blue-500 cursor-pointer'
                onClick={() => navigateTo('/privacy-policy')}
              >
                privacy policy
              </span>
            </div>
          </main>
          <footer></footer>
        </div>
      </div>
    </div>
  );
};

export default CreateTweetModal;
