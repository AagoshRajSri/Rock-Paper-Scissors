let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");

// Function to get computer's choice randomly
const getCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 3);
    return options[random]; 
};

// Function to determine the winner
const determineWinner = (userChoice, compChoice) => {
    if (userChoice === compChoice) {
        return "It's a draw!";
    }
    
    if (
        (userChoice === "rock" && compChoice === "scissors") ||
        (userChoice === "scissors" && compChoice === "paper") ||
        (userChoice === "paper" && compChoice === "rock")
    ) {
        userscore++;
        return "You win!";
    } else {
        compscore++;
        return "Computer wins!";
    }
};

// Update the score display
const updateScore = () => {
    document.querySelector("#userscore").textContent = userscore;
document.querySelector("#compscore").textContent = compscore;
};

// Main function that plays the game when user clicks on a choice
const playGame = (userChoice) => {
    const compChoice = getCompChoice();
    const result = determineWinner(userChoice, compChoice);
    console.log("User choice:", userChoice);
    console.log("Computer choice:", compChoice);
    console.log(result);

    // Update the score on the page
    updateScore();

    // Optionally display result in HTML (you can add this to show on the webpage)
    document.querySelector("#result").textContent = result;
};

// Event listeners for each choice
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");        
        playGame(userChoice); // Call the playGame function
    });
});
