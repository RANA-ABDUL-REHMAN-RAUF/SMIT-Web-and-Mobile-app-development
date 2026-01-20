# Assignment 1 — SMIT Web & Mobile App Development (Course Website)

## Overview
This repository contains a small static website created as part of the SMIT  Web Design & Development exercises. It is a simple multi-page static site (UI-only) demonstrating basic HTML layout, images, media, forms and navigation.

## Website Link
**Live Preview:** [SMIT-1](https://assignment-smit-1.surge.sh/index.html)

## What I reviewed
I inspected all HTML files in `01_HTML/` and the media files referenced. The site is static with several pages and mock UI elements (login form, contact form, gallery, media player). No backend code or form-processing scripts are present.

## Pages (located in 01_HTML/)
- index.html — Home page (headings, lists, definition list examples)
- about.html — About / chairman message
- gallery.html — Images and `<figure>/<figcaption>` examples
- media.html — Audio and video examples (uses local Media files)
- contact.html — Contact form mockup (static)
- login.html — Login form mockup
- register.html — Register page (placeholder)

## File structure (representative)
```
SMIT-Web-and-Mobile-app-development/
├── 01_HTML/
│   ├── index.html
│   ├── about.html
│   ├── gallery.html
│   ├── media.html
│   ├── contact.html
│   ├── login.html
│   └── register.html
├── Media/
│   ├── images.jpeg
│   ├── download.jpeg
│   ├── umsir.mp4
│   └── t.mp3
└── README.md
```

## Technologies used
- HTML5 (static)
- Basic inline CSS (present in each HTML file)
- Browser-native audio/video controls

## How to view locally
1. Clone or download the repository.
2. Open `01_HTML/index.html` (or any page) in a web browser. No server required — static files only.
3. Ensure the `Media/` folder is present and images/media are not renamed so they load correctly.

## Key observations and prioritized suggestions
I prioritized accessibility, correctness, and maintainability. Below are concrete findings and suggested fixes.

1. Fix the DOCTYPE declarations
- Problem: Files use `<!DOCTYPE html5>` or `<!DOCTYPE Html5>` (invalid).  
- Fix: Replace with the correct HTML5 doctype:
  ```html
  <!DOCTYPE html>
  ```
  This ensures standards mode and consistent rendering.

2. Ensure meta charset is present and consistent
- Problem: Some files are missing `<meta charset="UTF-8">`.
- Fix: Add inside `<head>`:
  ```html
  <meta charset="utf-8">
  ```

3. Replace layout table used as navigation with semantic markup
- Problem: The header navigation is implemented with a table. Tables are for tabular data; using them for layout harms semantics and accessibility.
- Suggestion: Use semantic elements (`<nav>`, `<ul>`, `<li>`, `<a>`) and CSS for layout. Example:
  ```html
  <nav>
    <ul class="main-nav">
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About</a></li>
      ...
    </ul>
  </nav>
  ```

4. Improve forms for accessibility and correct behavior
- Problems found:
  - `contact.html` uses `<input type="button" value="Submit">` (does not submit).
  - Missing `name` attributes on many form controls, which prevents real submission.
  - `<label for>` should match input `id`.
- Fixes:
  - Use `<input type="submit">` or `<button type="submit">Submit</button>`.
  - Ensure every input has `name` and matching `id`.
  - Example:
    ```html
    <label for="email">Email:</label>
    <input id="email" name="email" type="email" required>
    ```

5. Improve alt attributes and image filenames
- Problem: Many images have empty `alt=""` or filenames with spaces (e.g., `images (1).jpeg`) which can cause issues.
- Suggestion:
  - Use meaningful alt text for decorative vs informative images.
  - Rename files to avoid spaces (e.g., `images-1.jpeg`) and update references.

6. Fix minor typos and copy issues
- Examples: "All Right Reserverd" → "All Rights Reserved"
- Standardize footer year & wording if desired.

7. Consistent styling and layout
- Move repeated inline styles into a single external stylesheet (`style.css`) to reduce duplication and make maintenance easier.
- Add a responsive viewport meta tag:
  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1">
  ```

8. Improve content semantics
- Use a single `<h1>` per page representing the main topic.
- Use `<section>` and `<article>` where appropriate to group content.

## Suggested minimal change list (quick wins)
- Replace all DOCTYPE lines with `<!DOCTYPE html>`.
- Add `<meta charset="utf-8">` and `<meta name="viewport" content="width=device-width, initial-scale=1">` in every page.
- Change contact form submit button to type="submit", add `name` attributes.
- Fix misspellings in footer text.
- Replace table-based nav with semantic nav (or at least wrap the table in `<nav>` until refactor).
- Rename image files to remove spaces.

## Example: minimal updated head for each page
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Page Title</title>
  <link rel="stylesheet" href="../style.css"> <!-- or path as needed -->
</head>
```

## Accessibility notes
- Add `alt` text for images (describe content for meaningful images; empty `alt=""` for purely decorative images).
- Ensure form fields have associated `<label>` elements.
- Use logical document order and heading hierarchy.

## Next steps I can help with
- I can produce a single PR patch that:
  - Fixes DOCTYPE and adds meta tags across all HTML files.
  - Converts the repeated inline header markup into a semantic `nav` + external CSS or at least a shared snippet.
  - Replace `type="button"` with `type="submit"` and add `name` attributes to form controls.
  - Suggest or create a minimal `style.css` and move the repeated styles there.
- Tell me which changes you want me to commit first and I will prepare the updated files or a patch.

## Credit
- Project created as part of SMIT  Web & App Development course exercises.

## License
Use for learning and personal projects. No formal license attached.