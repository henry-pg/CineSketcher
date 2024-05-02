"use client";
import React from 'react';
import Button from '/components/ui/Button';
import {useState, useEffect} from 'react';
import CharacterPopup from '../../components/ui/CharacterPopup';
import ScenarioPopup from '../../components/ui/ScenarioPopup';
import MoonLoader from 'react-spinners/MoonLoader'




const page = () => {
  const [characterArray, setCharacterArray] = useState([]);
  const [scenarioArray, setScenarioArray] = useState([]);
  const [imageUrlArray, setImageUrlArray] = useState([]);
  const [started, setStarted] = useState(false);
  
  const [characterPopup, setCharacterPopup] = useState(false);
  const [scenarioPopup, setScenarioPopup] = useState(false);

  const [characterIndex, setCharacterIndex] = useState(null);
  const [scenarioIndex, setScenarioIndex] = useState(null);

  const createNewCharacter = () => {
    const character = {
      index: characterArray.length,
      name: "",
      description: "",
    }
    setCharacterArray(prevCharacterArray => [...prevCharacterArray, character]);
  }

  const createNewScenario = () => {
    const scenario = {
      index: scenarioArray.length,
      imageUrl: "",
      description: "",
    }
    setScenarioArray(prevScenarioArray => [...prevScenarioArray, scenario]);
  }

  


  return (
    <>
    <CharacterPopup show={characterPopup} onClose={()=>{setCharacterPopup(false); setCharacterIndex(null);}} characterArray={characterArray} characterIndex={characterIndex}/>
    <ScenarioPopup show={scenarioPopup} onClose={()=>{setScenarioPopup(false); setScenarioIndex(null);}} scenarioArray={scenarioArray} scenarioIndex={scenarioIndex} imageArray={imageUrlArray}/>
      <div className="bg-white min-h-screen p-5">
        <header className="flex justify-between items-center bg-white text-dark">
          <a href="/">
          <h1 className="text-2xl">CineSketcher</h1>
          </a>
        </header>
        <div className="w-full flex items-center flex-col">
          <div className="mt-6 w-[1374px]">
              <div className="text-black text-xl text-center">Characters</div>
              <div className="text-gray text-sm text-center">Add characters and their visual descriptions!</div>
              <div className="flex flex-row flex-wrap mt-8 w-full outline outline-gray outline-2 rounded-lg px-4 pb-8 space-x-4 space-y-8">
                <div className={`mt-8 ml-4 h-[150px] w-[250px] bg-gray text-white rounded-lg flex justify-center items-center text-5xl cursor-pointer ${characterPopup||scenarioPopup ? "":"transform transition-transform duration-300 hover:scale-105"}`} onClick={()=>{createNewCharacter();setCharacterPopup(true);setScenarioPopup(false);setCharacterIndex(characterArray.length);}}>
                  +
                </div>
                {characterArray.map((character, index) => (
                  <div key={index} className={`h-[150px] w-[250px] outline outline-gray outline-2 rounded-lg p-4 text-black rounded-lg flex justify-center items-center text-lg cursor-pointer ${characterPopup||scenarioPopup ? "":"transform transition-transform duration-300 hover:scale-105"}`} onClick={()=>{setCharacterPopup(true);setScenarioPopup(false);setCharacterIndex(index);}}>

                  </div>
                ))}
              </div>
          </div>
                {/* <MoonLoader color="#99947f" /> */}
          <div className="mt-6 w-[1374px]">
              <div className="text-black text-xl text-center">Storyboard</div>
              <div className="text-gray text-sm text-center">Describe your scenes!</div>
              <div className="flex flex-row flex-wrap mt-8 w-full outline outline-gray outline-2 rounded-lg px-4 pb-8 space-x-4 space-y-8">
                <div className={`mt-8 ml-4 h-[250px] w-[250px] bg-gray text-white rounded-lg flex justify-center items-center text-5xl cursor-pointer ${characterPopup||scenarioPopup ? "":"transform transition-transform duration-300 hover:scale-105"} `} onClick={()=>{createNewScenario();setScenarioPopup(true);setScenarioIndex(characterArray.length);setCharacterPopup(false);}}>
                  +
                </div>
                {scenarioArray.map((scenario, index) => (
                  <div key={index}>
                    <div className={`h-[250px] w-[250px] outline outline-gray outline-2 rounded-lg p-4 text-black rounded-lg flex justify-center items-center text-lg cursor-pointer ${characterPopup||scenarioPopup ? "":"transform transition-transform duration-300 hover:scale-105"}`} onClick={()=>{setScenarioPopup(true);setScenarioIndex(index);setCharacterPopup(false);}}>

                    </div>
                  </div>
                ))}
              </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default page;
