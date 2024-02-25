"use client";
import React, { useEffect, useState } from 'react';
import Button from '/components/ui/Button';

const Login = ({ show, onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPopUp, setShowPopup] = useState(show);
  const [animate, setAnimate] = useState(false);
  const [createAccount, setCreateAccount] = useState(false);

  // Synchronize internal state with prop and handle animation
  useEffect(() => {
    let animationTimeout;
    if (show) {
      setShowPopup(true);
      animationTimeout = setTimeout(() => setAnimate(true), 10);
    } else {
      setAnimate(false);
      animationTimeout = setTimeout(() => {
        setShowPopup(false);
        setCreateAccount(false);
      }, 300);
    }
  
    // Cleanup function to clear the timeout if the component unmounts
    // or if the effect runs again before the timeout completes
    return () => {
      clearTimeout(animationTimeout);
    };
  }, [show]);
  

  const handleLogin = (event) => {
    event.preventDefault();
    console.log('Login with:', username, password);
    // Implement login logic here
  };

  // Close the popup and handle animation
  const handleClose = (event) => {
    if (event.target.id === 'popupBackground') {
      setAnimate(false);
      setTimeout(() => {
        setShowPopup(false);
        setCreateAccount(false);
        if (onClose) {
          onClose();
        }
      }, 300); // Wait for the animation to finish
    }
  };

  // Define the inline styles for animation
  const backgroundStyle = {
    transition: 'opacity 300ms ease-in-out',
    opacity: animate ? 1 : 0,
  };

  const modalStyle = {
    transition: 'transform 300ms ease-in-out',
    transform: animate ? 'translateY(0)' : 'translateY(-100%)',
  };

  return (
    <>
      {showPopUp &&
      <div id="popupBackground" onClick={handleClose} style={backgroundStyle} className="fixed inset-0 bg-dark bg-opacity-75 flex justify-center items-center backdrop-filter backdrop-blur-sm">
        {!createAccount && 
            <div style={modalStyle} className="bg-white p-8 rounded shadow-xl" onClick={e => e.stopPropagation()}>
            <h2 className="text-dark text-lg font-bold mb-6">Login</h2>
            <form onSubmit={handleLogin} className="space-y-4">
                <div>
                <label htmlFor="username" className="text-gray block mb-2">Username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-4 py-2 rounded border border-gray focus:outline-none focus:border-dark text-gray"
                />
                </div>
                <div>
                <label htmlFor="password" className="text-gray block mb-2">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 rounded border border-gray focus:outline-none focus:border-dark text-gray"
                />
                </div>
                
                <div className="text-dark text-sm">New user? <a className="underline cursor-pointer" onClick={()=>{setCreateAccount(true)}}>Create account</a>.</div>
                <Button text="Log in" classes="w-full text-base" />
            </form>
            </div>
        }
        {createAccount &&
            <div style={modalStyle} className="bg-white p-8 rounded shadow-xl" onClick={e => e.stopPropagation()}>
            <h2 className="text-dark text-lg font-bold mb-6">Create account</h2>
            <form onSubmit={handleLogin} className="space-y-4">
                <div>
                <label htmlFor="username" className="text-gray block mb-2">Username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-4 py-2 rounded border border-gray focus:outline-none focus:border-dark text-gray"
                />
                </div>
                <div>
                <label htmlFor="password" className="text-gray block mb-2">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 rounded border border-gray focus:outline-none focus:border-dark text-gray mb-2"
                />
                </div>
                <Button text="Create account" classes="w-full text-base" />
            </form>
            </div>
        }
      </div>
      }
    </>
  );
};

export default Login;
