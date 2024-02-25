"use client";
import React from 'react';
import Typewriter from '/components/misc/Typewriter';
import Button from '/components/ui/Button';
import Login from '/components/ui/Login';
import {useState} from 'react';



const page = () => {
  const [showLogin, setShowLogin] = useState(false);
  const closePopup = () => {
    setShowLogin(false);
  }
  return (
    <>
      <Login show={showLogin} onClose={closePopup}/>
      <div className="bg-white min-h-screen">
        <header className="flex justify-between items-center p-5 bg-white text-dark">
          <h1 className="text-2xl">CineSketcher</h1>
          <Button text="Login" classes="text-base" onClick={() => {setShowLogin(true)}}/>
        </header>
        
        <div className="flex justify-center flex-col items-center flex-wrap">
          <div className="text-dark text-[90px] font-bold">
            Storyboarding.
          </div>
          <div className="text-dark text-[90px] font-bold">
            Made Simple.
          </div>
          <Typewriter 
            classes="text-dark text-[25px] w-[800px] flex flex-wrap text-center h-[75px]" 
            text="CineSketcher combines your imagination with AI, bringing your ideas to life in minutes."
            delay={45}
          />

        </div>
        <div className="flex justify-center my-10">
          <Button text="Start Sketching" classes="text-lg" onClick={() => {setShowLogin(true)}}/>
        </div>
      </div>
    </>
  );
};

export default page;
