import React from 'react';
import Typewriter from '/components/misc/Typewriter';
import Button from '/components/ui/Button';


const index = () => {
  return (
    <>
      <div className="bg-white min-h-screen">
        <header className="flex justify-between items-center p-5 bg-white text-dark">
          <a href="/">
            <h1 className="text-2xl">CineSketcher</h1>
          </a>
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
          <a href="/sketch">
            <Button text="Start Sketching" classes="text-lg"/>
          </a>
        </div>
      </div>
    </>
  );
};

export default index;


