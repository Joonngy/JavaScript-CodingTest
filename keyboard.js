// app.ts
const readline = require("readline");

let isFeatureEnabled = false;

// Create an interface for the keyboard input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to toggle the feature
function toggleFeature() {
  // Toggle the feature state
  isFeatureEnabled = !isFeatureEnabled;

  // Perform actions based on the feature state
  if (isFeatureEnabled) {
    console.log("Feature is now enabled");
    // Call functions or perform actions when the feature is enabled
  } else {
    console.log("Feature is now disabled");
    // Call functions or perform actions when the feature is disabled
  }
}

// Event listener for key presses
process.stdin.on("keypress", (_, key) => {
  // Check for the specific key you want to use for toggling (e.g., 't')
  if (key && key.name === "t") {
    toggleFeature();
  }
});

// Initialize keypress listener
if (process.stdin.isTTY) {
  process.stdin.setRawMode(true);
}
process.stdin.resume();

// Prompt the user
rl.question('Press "T" to toggle the feature. Press Ctrl+C to exit.\n', () => {
  // Handle any additional setup after the user has been prompted.
});

// Handle Ctrl+C to gracefully exit
process.on("SIGINT", () => {
  rl.close();
  process.stdin.pause();
  console.log("Exiting...");
  process.exit();
});
