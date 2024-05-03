"use client";
import React, { useEffect, useState } from 'react';
import Button from '/components/ui/Button';

const ScenarioPopup = ({ show, onClose, scenarioArray, setScenarioArray, scenarioIndex, handleGenerateImage, imageUrlArray, setImageUrlArray, characterArray }) => {


    const [showPopUp, setShowPopup] = useState(show);
    const [animate, setAnimate] = useState(false);
    const [scenarioDescription, setScenarioDescription] = useState('');

    useEffect(() => {
        let animationTimeout;
        if (show) {
            setShowPopup(true);
            setScenarioDescription(scenarioArray[scenarioIndex].description);
            animationTimeout = setTimeout(() => setAnimate(true), 10);
        } else {
            setAnimate(false);
            animationTimeout = setTimeout(() => {
                setShowPopup(false);
            }, 300);
        }
    
        return () => {
            clearTimeout(animationTimeout);
        };
    }, [show, scenarioArray, scenarioIndex]);


    const handleScenarioChange = (event) => {
        setScenarioDescription(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();  
        const updatedScenario = { 
            ...scenarioArray[scenarioIndex],
            
            description: scenarioDescription,
        };

        

        const updatedArray = [...scenarioArray];
        updatedArray[scenarioIndex] = updatedScenario;


        console.log(imageUrlArray)
        const updatedImageArray = [...imageUrlArray];
        updatedImageArray[scenarioIndex] = "loading";
        setImageUrlArray(updatedImageArray);
        setScenarioArray(updatedArray);
        handleGenerateImage(scenarioDescription, characterArray);
        setTimeout(() => {
            setShowPopup(false);
            if (onClose) {
                onClose();
            }
        }, 300);
        
    };

    const handleClose = (event) => {
        if (event.target.id === 'popupBackground') {
            setAnimate(false);
            setTimeout(() => {
                setShowPopup(false);
                if (onClose) {
                    onClose();
                }

            }, 300);
        }
    };

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
                <div style={modalStyle} className="bg-white p-4 w-[500px] rounded shadow-xl" onClick={e => e.stopPropagation()}>
                    <h2 className="text-dark text-lg font-bold mb-4">Scenario</h2>
                    <div className="space-y-4">
                        <div>
                            
                        </div>
                        <div>
                            <label className="text-gray block mb-2">Scenario Description</label>
                            <textarea
                                value={scenarioDescription}
                                onChange={handleScenarioChange}
                                className="w-full px-4 py-2 rounded border border-gray focus:outline-none focus:border-dark text-gray"
                            />
                        </div>
                        
                        <Button text="Generate" classes="w-full text-base" onClick={handleSubmit}/>
                    </div>
                </div>
            </div>
        }
        </>
    );
    
};

export default ScenarioPopup;
