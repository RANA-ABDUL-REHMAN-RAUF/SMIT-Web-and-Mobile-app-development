## Assignment 5 - Numbers, Integers & Decimals (Chapters 26-30)

## 📚 Overview

This assignment practices JavaScript **numbers**, **integers**, **decimals**, and **Math methods** from chapters 26–30.  
The page provides an input, a set of number‑related buttons, and an output area to display the results.

## 🌐 Live Demo

**Live URL:** [`https://aman-js5.netlify.app/`](https://aman-js5.netlify.app/)

## 🖼️ Reference Image

> Place the provided reference screenshot inside a `refrence/` (or `reference/`) folder and update the image path below if needed.


![Assignment 5 Reference](./refrence/js-5.jpeg)


## 📋 Features

The following buttons are implemented in `script.js`:

1. **Round A Number** (`roundANum()`)  
   - Reads the value from `inputText`.  
   - If empty, shows a Toastify error: **"Please enter a number."**  
   - Uses `Math.round()` to round the number and shows the result in `Output`.

2. **Ceil A Number** (`ceilANum()`)  
   - Validates input like above.  
   - Uses `Math.ceil()` to round **up** to the nearest integer.

3. **Floor A Number** (`floorANum()`)  
   - Validates input.  
   - Uses `Math.floor()` to round **down** to the nearest integer.

4. **Generate A Random Number** (`randomNum()`)  
   - Ignores the current input.  
   - Uses `Math.random()` to generate a random number from **0–100** (rounded) and displays it.

5. **Throw A Dice** (`throwADice()`)  
   - Simulates a dice throw using `Math.floor((Math.random() * 6) + 1)`.  
   - Shows a random integer from **1–6**.

6. **Generate A Strong Password** (`generateAStrongPass()`)  
   - Takes a **length** from the input field.  
   - If empty, shows Toastify: **"Give a limit."**  
   - Builds a password using **uppercase letters**, **lowercase letters**, **digits**, and **symbols**.

7. **Converting Strings** (`convertingString()`)  
   - Demonstrates converting a string `"25.12345"` to a number using `Number()`.  
   - Shows the original value and converted value in the console (can be extended to the output if needed).

8. **Controlling Length** (`controllingLength()`)  
   - Uses the input as the number of decimal places.  
   - Applies `toFixed()` to `25.12345` and displays the result in `Output`.

9. **Calculate GST** (`calculateGST()`)  
   - Reads a numeric amount from the input.  
   - If empty, shows Toastify: **"Give a number."**  
   - Calculates GST on that amount and shows the result in `Output`.

10. **Clear Input / Clear Output**  
    - `clearInput()` empties the input box.  
    - `clearOutput()` clears the `Output` area.

## 📁 Project Structure

```text
Assignment_5/
├── index.html      # Main HTML (layout, input, buttons, output)
├── script.js       # JavaScript logic for numbers, Math methods, and GST
├── style.css       # Styling for layout and theme
└── README.md       # This file
```

## 🛠️ Technologies Used

- **HTML5** – Structure and markup  
- **CSS3** – Styling  
- **JavaScript (ES6+)** – Number handling and Math methods  
- **Bootstrap 5** – Layout and basic UI components  
- **Toastify JS** – Toast notifications for validation

## 🚀 Getting Started

1. Open the folder: `SMIT-Web-and-Mobile-app-development/03_JS/Assignment_5`  
2. Open `index.html` in your browser.

## 👤 Author

**Rana Abdul Rehman Rauf**

## 📄 License

This project is created as an educational assignment for the SMIT Web and Mobile App Development course.


