// Function to add a new anime to the list
function addAnime() {
    // Get the value entered by the user
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

    // Add the list item to the list
    list.appendChild(listItem);

    // Clear the input field after adding
    document.getElementById('anime-name').value = "";
}
