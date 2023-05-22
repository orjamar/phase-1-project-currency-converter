# phase-1-project-currency-converter
It's a site to get quickly currency conversion information
Currency Converter - Single-Page Application

This project is a single-page currency converter application built using HTML, CSS, and JavaScript. It allows users to convert between different currencies using real-time exchange rates fetched from an HTTP API.

Files:
- index.html: The main HTML file that contains the structure and elements of the currency converter application.
- styles.css: The CSS file that provides the styling and appearance for the application.
- main.js: The JavaScript file that contains the logic and functionality for the currency conversion.
- db.json: A JSON file that simulates an HTTP API response and provides the currency data for the application.

Functionality:
- The application fetches the currency data from the `db.json` file and populates the currency select dropdowns dynamically.
- Users can enter the amount to convert, select the "From" and "To" currencies, and click the "Convert" button to perform the conversion.
- The application uses the selected currencies' exchange rates to calculate and display the converted amount in the result section.

Event Listeners and Array Iteration:
- The application uses two event listeners to enable interactivity:
  1. The "Convert" button click event listener triggers the conversion when the user clicks the button.
  2. The "Amount" input change event listener automatically converts the currency whenever the amount is changed.

- Array iteration is used to populate the currency select dropdowns with options. The `forEach` method is employed to iterate over the currency array and create the option elements dynamically.

Instructions:
1. Place all the files (index.html, styles.css, main.js, and db.json) in the same directory.
2. Open the index.html file in a web browser to run the currency converter application.
