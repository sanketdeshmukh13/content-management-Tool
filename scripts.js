// Get the elements from the HTML document
let input = document.getElementById("input");
let addImage = document.getElementById("add-image");
let addVideo = document.getElementById("add-video");
let preview = document.getElementById("preview");
let content = document.getElementById("content");

// Add event listeners to the buttons
addImage.addEventListener("click", function() {
    // Prompt the user to enter an image URL
    let imageUrl = prompt("Enter an image URL:");
    // If the URL is not empty, insert an image tag in the input area
    if (imageUrl) {
        input.value += `<img src="${imageUrl}" alt="Image">`;
    }
});

addVideo.addEventListener("click", function() {
    // Prompt the user to enter a video URL
    let videoUrl = prompt("Enter a video URL:");
    // If the URL is not empty, insert a video tag in the input area
    if (videoUrl) {
        input.value += `<video src="${videoUrl}" controls></video>`;
    }
});

preview.addEventListener("click", function() {
    // Get the input value and set it as the inner HTML of the content div
    let inputValue = input.value;
    content.innerHTML = inputValue;
});
