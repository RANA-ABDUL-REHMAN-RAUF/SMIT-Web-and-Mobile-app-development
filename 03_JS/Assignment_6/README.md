# Assignment 6 - JavaScript Date, Time & Functions (Chapters 31-38)

## 📚 Overview

This assignment covers key JavaScript concepts from chapters 31-38, focusing on the **Date object**, **intervals**, and **functions** (passing data and returning values). The application provides an interactive interface to manipulate dates, calculate age in days, determine upcoming birthdays, and display high-precision time.

## 📋 Features

The application includes several interactive buttons that demonstrate advanced JavaScript functionality:

1.  **Get Name Of Today** (`getTodayName()`)
    *   Extracts the current day index and maps it to a string (e.g., "Monday").
2.  **Calculate Days Passed Since I Born** (`getDaysFromBorn()`)
    *   Takes a birth date from the input field.
    *   Calculates the total days lived using timestamp subtraction.
    *   Provides validation using **Toastify**.
3.  **When is your next birthday?** (`getNextBirthday()`)
    *   Calculates the exact date and day of the week for the user's upcoming birthday.
4.  **Greet User** (`greetUser()`)
    *   Checks the current hour and displays a "Good Morning", "Good Evening", or "Good Night" alert.
5.  **Tell Time (High Precision)** (`tellTime()`)
    *   Displays a real-time clock showing hours, minutes, seconds, and milliseconds in the output area.
6.  **Live Clock Display**
    *   The "Original String" card features a live ticking global date and time string.

## 📁 Project Structure

```text
Assignment_6/
├── index.html      # Main UI with Bootstrap components
├── script.js       # Core logic for Dates, Functions, and Intervals
├── style.css       # Custom styling and theme adjustments
└── README.md       # This file
```

## 🛠️ Technologies Used

-   **HTML5** - Structure and semantic markup.
-   **CSS3** - Custom styling for card layouts and theme consistency.
-   **JavaScript (ES6+)** - Date object manipulation, `setInterval`, and arithmetic logic.
-   **Bootstrap 5.3.8** - Responsive grid system and UI components.
-   **Toastify JS** - Elegant error and success notifications.

## 🚀 Getting Started

### Prerequisites

-   A modern web browser (Chrome, Firefox, Safari, or Edge).

### Installation & Run

1.  Navigate to the `SMIT-Web-and-Mobile-app-development/03_JS/Assignment_6` folder.
2.  Open `index.html` in your web browser.
3.  Use the `datetime-local` input field to select your birth date for the calculation features.

## 📖 JavaScript Concepts Demonstrated

### The Date Object
-   Fetching current time: `new Date()`.
-   Accessing specific components: `getDay()`, `getHours()`, `getFullYear()`, etc.
-   Creating specific dates: `new Date(year, month, day)`.

### Time Arithmetic
-   Calculating differences between timestamps in milliseconds.
-   Converting milliseconds to days: `(diff) / (1000 * 60 * 60 * 24)`.

### Functions & Logic
-   Functional encapsulation for specific tasks.
-   Input validation (ensuring a date is selected before calculating).
-   Asynchronous execution using `setInterval`.

## 🎨 Styling

The project maintains the course's signature color palette:
-   **Dark Navy** (`#1d3557`): Used for headers, footers, and primary display cards.
-   **Soft Mint** (`#f1faee`): Used for the main background to ensure readability.

## 👤 Author

**Rana Abdul Rehman Rauf**

## 📄 License

This project is created as an educational assignment for the SMIT Web and Mobile App Development course.

---

**Assignment By:** SMIT - Web and Mobile App Development
