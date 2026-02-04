## Assignment 3 – JavaScript DOM Practice

This assignment is a small JavaScript app for practicing **DOM manipulation**, **arrays**, and **basic validation** using a single text input and an output area.

### Features
- **Clear input**: `clearInput()` empties the text field with id `inputText`.
- **Clear output**: `clearOutput()` clears the element with id `Output`.
- **Simple alert**: `simpleAlert()` shows a basic browser alert.
- **Print name**: `printName()`  
  - Reads the value from `inputText`.  
  - If empty, shows a Toastify error message: “Please Enter Your Name.”  
  - Otherwise, prints the name inside `Output`.
- **Show all cities**: `printAllCities()`  
  - Uses the `allCities` array (Faisalabad, Lahore, etc.).  
  - Prints a numbered list of all cities into `Output`.
- **Add new city**: `addNewCity()`  
  - Takes the value from `inputText`.  
  - If empty, shows a Toastify error: “Please Enter city.”  
  - Otherwise, shows a success toast (“Successfully added”), pushes the city into `allCities`, and displays a green success message in `Output`.
- **Create multiplication table**: `createTable()`  
  - Takes a number from `inputText`.  
  - If empty, shows a Toastify error: “Please Enter a number.”  
  - Otherwise, prints the multiplication table from 1 to 10 for that number inside `Output`.

### How to Run
- **1. Open the HTML file** that includes `script.js` (e.g. in your browser via `Open With > Chrome`).
- **2. Make sure Toastify is included** in the HTML (via CDN `<script>` tag) so the toast messages work.
- **3. Use the buttons** (or event handlers) connected to these functions to:
  - Enter a value in the `inputText` field.
  - Click the respective button (Print Name, Show Cities, Add City, Create Table, Clear, etc.).
  - See the result in the `Output` element or as toast notifications.

### Main Concepts Practiced
- **DOM selection and update** using `document.getElementById(...)`.
- **Array operations** with `push` and iteration with `for` loops.
- **User input validation** (checking for empty strings).
- **Basic UI feedback** with Toastify notifications and inner HTML updates.

### Reference & Preview
- **Reference design**: See the screenshot in the `reference` folder for how the assignment UI should look.
- **Live preview URL**: You can preview a similar implementation at [`https://aman-js3.netlify.app/`](https://aman-js3.netlify.app/).
