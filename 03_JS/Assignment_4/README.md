## Assignment 4 - JavaScript Strings & Methods (Chapters 21-25)

## 📚 Overview

This assignment demonstrates JavaScript concepts from chapters 21-25, focusing on **strings** and common **string methods**, along with basic **DOM manipulation**.  
It provides an interactive UI with one input field and multiple buttons to transform text and work with a simple cities list.

## 🌐 Live Demo

**Live URL:** [`https://aman-js4.netlify.app/`](https://aman-js4.netlify.app/)

## 🖼️ Reference Image



![Assignment 4 Reference](./refrence/js-4.jpeg)


## 📋 Features

The application includes buttons that demonstrate string methods and DOM updates:

1. **Convert to Lowercase** (`convertToLowercase()`)  
   - Reads input from `inputText`.  
   - If empty, shows Toastify error: **“Please Enter text.”**  
   - Otherwise, prints `toLowerCase()` result in `Output`.

2. **Convert to Uppercase** (`convertToUppercase()`)  
   - If empty, shows Toastify error.  
   - Otherwise, prints `toUpperCase()` result in `Output`.

3. **Convert to Captalized** (`convertToCaptalized()`)  
   - If empty, shows Toastify error.  
   - Otherwise, makes the **first character uppercase** using `charAt(0).toUpperCase() + slice(1)`.

4. **Formatting** (`formatting()`)  
   - If empty, shows Toastify error.  
   - Otherwise, replaces underscores `_` with spaces and converts the result to lowercase:
     - Uses `replace(/_/g, " ")` and `toLowerCase()`.

5. **Print All Cities** (`printAllCities()`)  
   - Prints a numbered list of `allCities` into the `Output` area.

6. **Add Your City In List** (`addNewCity()`)  
   - If empty, shows Toastify error: **“Please Enter city.”**  
   - Otherwise:
     - Shows a green success toast: **“Successfully added”**  
     - Adds the city to `allCities` with `push()`  
     - Prints a success message in `Output`

7. **Find this word** (`findThisWord()`)  
   - If empty, shows Toastify error.  
   - Otherwise, checks if the entered value exists in the `allCities` list using `includes()` and prints `true/false`.

8. **Replace this word** (`replaceThisWord()`)  
   - If empty, shows Toastify error.  
   - Otherwise, runs `replace()` on the input and prints the result in `Output`.

9. **Clear Input / Clear Output**  
   - `clearInput()` empties the input field.  
   - `clearOutput()` clears the output section.

## 📁 Project Structure

```text
Assignment_4/
├── index.html      # Main HTML file with UI (input, buttons, output)
├── script.js       # JavaScript for strings, arrays, and DOM manipulation
├── style.css       # Custom styling
└── README.md       # This file
```

## 🛠️ Technologies Used

- **HTML5** - Structure and markup  
- **CSS3** - Styling  
- **JavaScript (ES6+)** - String methods and DOM updates  
- **Bootstrap 5** - Layout and UI components (CDN)  
- **Toastify JS** - Toast notifications for validation/success (CDN)

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome / Firefox / Edge)

### Run Locally

1. Open the folder: `SMIT-Web-and-Mobile-app-development/03_JS/Assignment_4`  
2. Double-click `index.html` (or open it in your browser).

## 💻 Usage

1. Type text (or a city name) into the **Input** field.  
2. Click any button (e.g., **Convert to Lowercase**, **Formatting**, **Print All Cities**).  
3. See the result in the **Output / Result** section.  
4. Use **Clear** / **Clear Output** to reset.

## 📖 JavaScript Concepts Demonstrated

### String Methods
- `toLowerCase()`, `toUpperCase()`
- `charAt()`, `slice()`
- `replace()` with regex (`/_/g`)
- `includes()`

### Arrays
- Basic array usage (`allCities`)
- `push()` to add new items

### DOM Manipulation
- `getElementById()`
- Updating UI via `innerText` and `innerHTML`

### Validation + Feedback
- Empty input checks
- Toastify error/success messages

## 👤 Author

**Rana Abdul Rehman Rauf**

## 📄 License

This project is created as an educational assignment for the SMIT Web and Mobile App Development course.


