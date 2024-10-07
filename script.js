// Function to add a new anime to the list
function addAnime() {
    const animeName = document.getElementById('anime-name').value;

    // Ensure the input is not empty
    if (animeName.trim() === "") {
        alert("Please enter an anime name.");
        return;
    }

    // Create a new list item (li) element
    const list = document.getElementById('list');
    const listItem = document.createElement('li');
    listItem.textContent = animeName;

    // Create a delete button for each anime item
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        list.removeChild(listItem);
        saveAnimeList();
    };
    listItem.appendChild(deleteButton);

    // Add the list item to the list
    list.appendChild(listItem);
    
    // Clear the input field after adding
    document.getElementById('anime-name').value = "";

    // Save the current anime list to local storage
    saveAnimeList();
}

// Function to save the anime list to local storage
function saveAnimeList() {
    const listItems = document.querySelectorAll('#list li');
    const animeList = [];
    listItems.forEach(item => {
        animeList.push(item.firstChild.textContent); // Push the text content (anime name)
    });
    localStorage.setItem('animeList', JSON.stringify(animeList)); // Save to local storage
}

// Function to load the anime list from local storage
function loadAnimeList() {
    const animeList = JSON.parse(localStorage.getItem('animeList')) || [];
    animeList.forEach(anime => {
        const list = document.getElementById('list');
        const listItem = document.createElement('li');
        listItem.textContent = anime;

        // Create a delete button for each anime item
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            list.removeChild(listItem);
            saveAnimeList();
        };
        listItem.appendChild(deleteButton);

        // Add the list item to the list
        list.appendChild(listItem);
    });
}

// Load the anime list when the page is loaded
window.onload = loadAnimeList;
