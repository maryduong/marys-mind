import { stories } from "./stories.js";

let selectedGenre = "all";
let searchTerm = "";

const buttons = document.querySelectorAll(".genre-list button");

buttons.forEach(function(button){
    button.addEventListener("click", function(){
        
        buttons.forEach(function(btn){
            btn.classList.remove("active");
        });
        button.classList.add("active");

        selectedGenre = button.textContent.toLowerCase();
        
        updateStories();
    });
}); 

const storyGrid = document.querySelector(".story-grid");

function renderStories(storyList){

    const allCards = storyList.map(story => {
    const cardHTML = `
        <article class="story-card" data-genre="${story.genre.toLowerCase()}" data-id="${story.id}">
            <img src="${story.image}" alt="${story.title}">
            <h3>${story.title}</h3>
            <p>By ${story.author}</p>
            <p>${story.description}</p>
        </article>
        `;
    return cardHTML;
    }); 

    if(storyList.length === 0){
        storyGrid.innerHTML = "<p>No stories found.</p>";
    }
    else{
        storyGrid.innerHTML = allCards.join("");
    }

    const cards = document.querySelectorAll(".story-card");
    cards.forEach(card =>{
        card.addEventListener("click", function(){
            window.location.href = `story.html?id=${card.dataset.id}&from=home`;
        });
    });
}

function updateStories() {
    const filteredStories = stories.filter(story => {
        return (selectedGenre === "all" || story.genre.toLowerCase() === selectedGenre) && story.title.toLowerCase().includes(searchTerm);
    });

    renderStories(filteredStories);
}

renderStories(stories); 

const searchInput = document.querySelector("#search-input");
searchInput.addEventListener("input", function(){
    searchTerm = searchInput.value.toLowerCase(); 
    updateStories();
});