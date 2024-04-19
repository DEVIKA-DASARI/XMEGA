let slideIndex = 0;
const slides = document.getElementsByClassName("cover");

// Show the initial slide
showSlide(slideIndex);

// Function to display a specific slide
function showSlide(index) {
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Calculate the next slide index
    slideIndex += index;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    // Display the current slide
    slides[slideIndex].style.display = "block";
    slides[slideIndex].classList.remove("fade-out");
    slides[slideIndex].classList.add("fade-in");

    // Hide the previous slide after fade-in animation completes
    const prevIndex = (slideIndex === 0) ? slides.length - 1 : slideIndex - 1;
    slides[prevIndex].classList.remove("fade-in");
    slides[prevIndex].classList.add("fade-out");
}

// Function to change slide on button click
function changeSlide(index) {
    showSlide(index);
}

// Automatically change slide every 3 seconds
setInterval(() => {
    showSlide(1);
}, 1000);

document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Hardcoded credentials for demonstration
    var validUsername = "admin";
    var validPassword = "password";

    if (username === validUsername && password === validPassword) {
        // Authentication successful
        window.location.href = www.rolex.org; // Redirect to dashboard page
    } else {
        // Authentication failed
        document.getElementById("error-message").innerText = "Invalid username or password";
    }
});

// Function to open video modal with specified video source
function openVideo(videoSource) {
    const modal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('modalVideo');

    // Check if the video source is a YouTube link
    if (videoSource.includes('youtube.com')) {
        // Extract the video ID from the YouTube link
        const videoId = videoSource.split('v=')[1];
        const embedUrl = `https://www.youtube.com/embed/${videoId}`;

        // Set the iframe src attribute to the YouTube embed URL
        videoFrame.src = embedUrl;
    } else {
        // Assume the videoSource is a direct link to a video file
        videoFrame.src = videoSource;
    }

    modal.style.display = 'block';
}

// Function to close the video modal
function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('modalVideo');

    videoFrame.src = ''; // Clear the iframe src attribute
    modal.style.display = 'none';
}