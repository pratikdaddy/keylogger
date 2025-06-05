# Node Keylogger

A simple Node.js keylogger using event emitters and global keyboard listener.

## Features

- Logs all key presses to a file (`keylog.txt`)
- Emits events for `keydown`, `keyup`, and `keypress`

## Getting Started

### 1. open the folder keylogger main in the VSCODE,ensuring that it includes every files that has been provided over here


### 2. Install Dependencies

```sh
npm install
```

### 3. Run the Keylogger

To start logging key presses:

```sh
node keylogger.js
```

All key presses will be logged to `keylog.txt` in the project directory.

### 4. View Logged Keys

Open `keylog.txt` to see the recorded key presses and timestamps.

