'use strict';

import { onEvent, select, create } from "./utils.js";
import { Subscriber } from "./subscriber.js";

// Variables

const userInputElement = select('.input');
const postButton = select('.post');
const userOutput = select('.grid-output');
const imageName = select('.imageName');
const insertImage = select('.image');


// functions

function userPost(includeImage) {
    const userInputValue = userInputElement.value.trim();

    if (userInputValue !== '') {
        const outputDiv = setHeader();

        const postContent = document.createElement('div');
        postContent.textContent = userInputValue;
        postContent.className = 'output-text';

        outputDiv.appendChild(postContent);

        if (includeImage) {
            let file = insertImage.files[0];
            addUserImg(outputDiv, file);
        }

        userOutput.appendChild(outputDiv);
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

function addUserImg(outputDiv, file) {
    if (file) {
        const userImage = document.createElement('img');
        userImage.src = URL.createObjectURL(file);
        userImage.alt = 'User selected image';
        userImage.className = 'user-input-img';
        outputDiv.appendChild(userImage);
    }
}

function setHeader() {
    const userFirstName = 'Joseph';
    const userLastName = 'Terrado';
    const userFullName = `${userFirstName} ${userLastName}`;
    const currentDate = getDate();

    const outputDiv = document.createElement('div');
    outputDiv.className = 'output-box';

    const headerContent = document.createElement('div');
    headerContent.className = 'header-content'; 

    const headerImage = document.createElement('div');
    headerImage.className = 'header-image';
    headerContent.appendChild(headerImage);
    
    const headerName = document.createElement('div');
    headerName.className = 'acc-header';
    headerName.textContent = userFullName;
    headerContent.appendChild(headerName);

    const headerDate = document.createElement('div');
    headerDate.className = 'header-date';
    headerDate.textContent = currentDate;
    headerContent.appendChild(headerDate);

    outputDiv.appendChild(headerContent);

    return outputDiv;
}

function getDate() {
    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString('en-US', { month: 'short' });
    const currentDay = currentDate.getDate();
    const currentYear = currentDate.getFullYear();

    return `${currentMonth} ${currentDay}, ${currentYear}`;
}

function hideText() {
    imageName.innerText = '';
    userInputElement.value = '';
}

// Event functions

onEvent('change', insertImage, function() {
    imagePreview();
});

onEvent('click', postButton, function() {
    userPost(true);
    hideText();
});