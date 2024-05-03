import axios from 'axios';

export const generateScenario = async (scenarioDescription, characterArray) => {
    const response = await axios.post('http://127.0.0.1:5000/generate_image', {scenarioDescription, characterArray});

    return response;
}

export const test = async () => {
    const response = await axios.post('http://127.0.0.1:5000/test');
    return response;
}
