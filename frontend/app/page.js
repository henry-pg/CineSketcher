import React from 'react';
import Head from 'next/head';
import Typewriter from '/components/misc/Typewriter';



const page = () => {
  return (
    <>
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;700&display=swap" rel="stylesheet"/>

      </Head>
      <div className="bg-white min-h-screen">
        <header className="flex justify-between items-center p-5 bg-white text-dark">
          <h1 className="text-2xl">CineSketcher</h1>
          <button className="bg-dark hover:bg-gray text-white py-2 px-4 rounded">
            Login
          </button>
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
          <button className="bg-[#080909] hover:bg-gray text-white py-3 px-6 rounded">
            Start Sketching
          </button>
        </div>
      </div>
    </>
  );
};

export default page;
