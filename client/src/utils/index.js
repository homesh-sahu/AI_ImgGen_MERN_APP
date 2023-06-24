// Functions that can be used from anywhere in our project.
import FileSaver from 'file-saver';

import { surpriseMePrompts } from "../constants";

//Function to generate a random prompt
export function getRandomPrompt(prompt){
    const randomIndex = Math.floor( Math.random() * (surpriseMePrompts.length));
    const randomPrompt = surpriseMePrompts[randomIndex];

    if(randomPrompt == prompt) return getRandomPrompt(prompt);

    return randomPrompt;
};

//Function to download an image
export async function downloadImage(_id, photo){
    FileSaver.saveAs(photo, `download-${_id}.jpg`);
};