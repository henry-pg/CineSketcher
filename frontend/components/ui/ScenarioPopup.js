"use client";
import React, { useEffect, useState } from 'react';
import Button from '/components/ui/Button';

const  ScenarioPopup = ({ show, onClose, scenarioArray, ScenarioIndex, imageArray }) => {
    const [showPopUp, setShowPopup] = useState(show);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        let animationTimeout;
        if (show) {
        setShowPopup(true);
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
    }, [show]);
    

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
                <div style={modalStyle} className="bg-white p-4 w-[700px] rounded shadow-xl" onClick={e => e.stopPropagation()}>
                    <h2 className="text-dark text-lg font-bold mb-4">Scenario</h2>
                    <div className="space-y-4">
                        <div>
                        <label className="text-gray block mb-2">Character Name</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 rounded border border-gray focus:outline-none focus:border-dark text-gray"
                        />
                        </div>
                        <div>
                        <label htmlFor="password" className="text-gray block mb-2">Character Description</label>
                        <textarea
                            type="text"
                            className="w-full px-4 py-2 rounded border border-gray focus:outline-none focus:border-dark text-gray"
                        />
                        </div>
                        
                        <Button text="generate" classes="w-full text-base" />
                    </div>
                </div>
        </div>
        }
        </>
    );
};

export default ScenarioPopup;
