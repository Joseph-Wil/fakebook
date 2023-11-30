'use strict';

import { onEvent, getElement, select, create } from "./utils.js";
import { User } from "./user.js";

// Variables

const userInput = select('.input');
const postButton = select('.post');
const userOutput = select('.grid-output');
const insertImage = getElement('#image');
const imageName = select('.imageName');


// functions

function userPost() {
    const userInputvalue = userInput.value.trim();

    if(userInputvalue !== '') {
        const postElement = create('div');
        postElement.classList.add('user-post');

        const userInputDisplay = create('p');
        userInputDisplay.innerText = userInputvalue;

        postElement.appendChild(userInputDisplay);

        userOutput.appendChild(postElement);

        userInputvalue = '';
        insertImage.value = '';

        setHeader();
    }
}

function imagePreview() {
    let file = insertImage.files[0];

    if (file) {
        imageName.innerText = file.name;
    } else {
        imageName.innerText = '';
    }
}

function setHeader() {
    const date = getDate();
    const headerDate = 

}

function getDate() {
    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString('en-US', { month: 'short' });
    const currentDay = currentDate.getDate();
    const currentYear = currentYear.getFullYear();

    return `${currentMonth} ${currentDay}, ${currentYear}`;
}

// Event functions

onEvent('change', insertImage, function() {
    imagePreview();
});

onEvent('click', postButton, function() {
    userPost();
    setHeader();
})