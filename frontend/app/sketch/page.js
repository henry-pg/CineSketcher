"use client";
import React from 'react';
import Button from '/components/ui/Button';
import {useState, useEffect} from 'react';
import CharacterPopup from '../../components/ui/CharacterPopup';
import ScenarioPopup from '../../components/ui/ScenarioPopup';
import MoonLoader from 'react-spinners/MoonLoader'

import {generateScenario, test} from '../../apis/api'




const page = () => {
  const [characterArray, setCharacterArray] = useState([]);
  const [scenarioArray, setScenarioArray] = useState([]);
  const [imageUrlArray, setImageUrlArray] = useState([]);
  
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
      description: "",
    }
    setScenarioArray(prevScenarioArray => [...prevScenarioArray, scenario]);
    setImageUrlArray(prevImageUrlArray => [...prevImageUrlArray, null]);
  }

  const handleDeleteCharacter = (index) => {
    const updatedArray = [...characterArray];
    updatedArray[index] = null;
    setCharacterArray(updatedArray);
  }

  const handleDeleteScenario = (index) => {
    const updatedArray = [...scenarioArray];
    updatedArray[index] = null;
    setScenarioArray(updatedArray);
  }

  const handleGenerateImage = async (scenarioDescription, characterArray) => {
    console.log(scenarioArray);
    const response = await generateScenario(scenarioDescription, characterArray);

    const updatedArray = [...imageUrlArray];
    updatedArray[scenarioIndex] = response.data;
    setImageUrlArray(updatedArray);

    

    



  }

  const handleTest = async (index) => {
    const response = await test();

    console.log(response);
  }

  useEffect(()=> {
    console.log(imageUrlArray);
  },[imageUrlArray])
  


  return (
    <>
    <CharacterPopup show={characterPopup} onClose={()=>{setCharacterPopup(false); setCharacterIndex(null); }} characterArray={characterArray} characterIndex={characterIndex} setCharacterArray={setCharacterArray}/>
    <ScenarioPopup show={scenarioPopup} onClose={()=>{setScenarioPopup(false); setScenarioIndex(null);}} scenarioArray={scenarioArray} scenarioIndex={scenarioIndex} setScenarioArray={setScenarioArray} handleGenerateImage={handleGenerateImage} imageUrlArray={imageUrlArray} setImageUrlArray={setImageUrlArray} characterArray={characterArray}/>
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
                <div className={`mt-8 ml-4 h-[150px] w-[250px] bg-gray text-white rounded-lg flex justify-center items-center text-5xl cursor-pointer ${characterPopup||scenarioPopup ? "":"transform transition-transform duration-300 hover:scale-105"}`} onClick={()=>{createNewCharacter();setCharacterIndex(characterArray.length);setCharacterPopup(true);setScenarioPopup(false);}}>
                  +
                </div>
                {characterArray.map((character, index) => (
                  character &&
                  <div key={index} className={`text-black h-[150px] w-[250px] outline outline-gray outline-2 rounded-lg p-4 text-black rounded-lg flex flex-col text-lg cursor-pointer ${characterPopup||scenarioPopup ? "":"relative transform transition-transform duration-300 hover:scale-105"}`} onClick={()=>{setCharacterPopup(true);setScenarioPopup(false);setCharacterIndex(index);}}>
                      
                      {!(characterPopup||scenarioPopup) && 
                      <div className="absolute right-0 top-0 w-[20px] cursor-pointer" onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteCharacter(index);
                      }}>
                        X
                      </div>}

                      <div className="w-full overflow-y-hidden text-overflow-ellipsis">
                        {character.name!="" ? character.name : "no name"}
                      </div> 

                      <div className="italic text-black text-gray text-base leading-5 mt-2 w-full overflow-y-hidden text-overflow-ellipsis">
                      {character.description!="" ? character.description : "no description"}
                      </div>
                  </div>
                ))}
              </div>
          </div>
                {/* <MoonLoader color="#99947f" /> */}
          <div className="mt-6 w-[1374px]">
              <div className="text-black text-xl text-center">Storyboard</div>
              <div className="text-gray text-sm text-center">Describe your scenes!</div>
              <div className="flex flex-row flex-wrap mt-8 w-full outline outline-gray outline-2 rounded-lg px-4 pb-8 space-x-4 space-y-8">
                <div className={`mt-8 ml-4 h-[250px] w-[250px] bg-gray text-white rounded-lg flex justify-center items-center text-5xl cursor-pointer ${characterPopup||scenarioPopup ? "":"transform transition-transform duration-300 hover:scale-105"} `} onClick={()=>{createNewScenario();setScenarioPopup(true);setScenarioIndex(scenarioArray.length);setCharacterPopup(false);}}>
                  +
                </div>
                {scenarioArray.map((scenario, index) => (
                  scenario &&
                  <div  key={index} className={`h-[250px] w-[250px] outline outline-gray outline-2 rounded-lg p-4 text-black rounded-lg flex flex-col text-lg cursor-pointer ${characterPopup||scenarioPopup ? "":"transform transition-transform duration-300 hover:scale-105"}`} onClick={()=>{setScenarioPopup(true);setScenarioIndex(index);setCharacterPopup(false);}}>
                    {imageUrlArray[index] != "loading" ? 
                    <div>
                    {!(characterPopup||scenarioPopup) && 
                      <div className="absolute right-0 top-0 w-[20px] cursor-pointer" onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteScenario(index);
                      }}>
                        X
                      </div>}

                      <div className="w-full h-[150px] bg-gray mt-2 flex justify-center items-center text-white text-base">
                        no image
                      </div>

                      <div className="italic text-black text-gray text-base leading-5 mt-2 w-full overflow-y-hidden text-overflow-ellipsis">
                      {scenario.description!="" ? scenario.description : "no description"}
                      </div>
                    </div>
                    :
                    <div className="w-full h-full flex justify-center items-center">
                      <MoonLoader color="#99947f" />
                    </div>}

                  </div>
                ))}
              </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <Button text="Download Storyboard" classes="text-lg mt-8 w-fit" onClick={() => {}}/>
        </div>
      </div>
    </>
  );
};

export default page;
