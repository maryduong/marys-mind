import { stories } from "./stories.js";

const params = new URLSearchParams(window.location.search);
const source = params.get("from");
const backLink = document.querySelector("#back-link");

if (source === "home") {
    backLink.href = "index.html";
} else {
    backLink.href = "discover.html";
}

const storyId = Number(params.get("id"));
const story = stories.find(story => story.id === storyId);
const storyDetails = document.querySelector("#story-details");

if (!story) {
    storyDetails.innerHTML = "<h2>Story not found.</h2>";
}
else{
    storyDetails.innerHTML = `
        <img src="${story.image}" alt="${story.title}">
        <h2>${story.title}</h2>
        <p>By ${story.author}</p>
        <p>${story.genre}</p>
        <p>${story.description}</p>
    `;
}

