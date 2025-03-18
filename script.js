// Alphabet array
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// Image array
const images = [
  "./images/images:A.JPG",
  "./images/images:B.JPG",
  "./images/images:C.JPG",
  "./images/images:D.JPG",
  "./images/images:E.PNG",
  "./images/images:F.JPG",
  "./images/images:G.JPG",
  "./images/images:H.png",
  "./images/images:I.jpeg",
  "./images/images:J.JPG",
  "./images/images:K.jpeg",
  "./images/images:L.JPG",
  "./images/images:M.JPG",
  "./images/images:N.JPG",
  "./images/images:O.JPG",
  "./images/images:P.JPG",
  "./images/images:Q.JPG",
  "./images/images:R.png",
  "./images/images:S.png",
  "./images/images:T.JPG",
  "./images/images:U.png",
  "./images/images:V.JPG",
  "./images/images:W.JPG",
  "./images/images:X.png",
  "./images/images:Y.JPG",
  "./images/images:Z.JPG",
];

// Game variables
let correctIndex = 0;
let score = 0;

// Function to start or reset the game
function startGame() {
  document.getElementById("message").innerText = "";
  updateScore(0); // Reset score to 0

  // Randomly pick the correct letter and its corresponding image
  correctIndex = Math.floor(Math.random() * 26);
  const correctLetter = letters[correctIndex];

  // Display the letter
  document.getElementById("random-letter").innerText = correctLetter;

  // Generate two additional random images
  let options = [correctIndex];
  while (options.length < 3) {
    let randomIndex = Math.floor(Math.random() * 26);
    if (!options.includes(randomIndex)) {
      options.push(randomIndex);
    }
  }

  // Shuffle the selected options
  options = options.sort(() => Math.random() - 0.5);

  // Display images
  const imageContainer = document.getElementById("image-container");
  imageContainer.innerHTML = ""; // Clear previous images

  options.forEach((index) => {
    const img = document.createElement("img");
    img.src = images[index];
    img.classList.add("image-option");
    img.onclick = () => checkAnswer(index);
    imageContainer.appendChild(img);
  });
}

// Function to check the answer
function checkAnswer(selectedIndex) {
  if (selectedIndex === correctIndex) {
    updateScore(5); // Correct answer: +5 points
    document.getElementById("message").style.color = "Green";
    document.getElementById("message").innerText = "Good Job!";
    document.getElementById("message").style.visibility = "visible";
    setTimeout(startGame, 1500); // Start new round after a short delay
  } else {
    updateScore(-2); // Wrong answer: -1 point
    document.getElementById("message").style.color = "Red";
    document.getElementById("message").innerText = "Try again...";
    document.getElementById("message").style.visibility = "visible";
  }
}

// Function to update and display the score
function updateScore(points) {
  score += points;
  document.getElementById("score-display").innerText = `Score: ${score}`;
}

function restartGame() {
  score = 0;
  startGame();
}

// Start the game when the page loads
document.addEventListener("DOMContentLoaded", startGame);
