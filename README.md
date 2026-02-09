# Saucedemo Automation Testing Project (Playwright)

📌 Project Overview

This project contains automated test scenarios for the website:
SauceDemo Website: https://www.saucedemo.com/

The automation is implemented using Playwright with JavaScript and follows the Page Object Model (POM) design pattern for better readability, reusability, and maintainability.

The project includes three test scenarios (Q1, Q2, Q3) as required in the assessment and supports:

Running tests individually

Running all tests together in sequential order

Generating Allure reports after every execution

🛠️ Technology Stack

Language: JavaScript

Automation Framework: Playwright

Design Pattern: Page Object Model (POM)

Reporting Tool: Allure Report and Chrome

Test Runner: Playwright Test

📁 Project Folder Structure (POM)

Project/
├── Actions/ # Reusable functions and helper actions
├── allure-results/ # Test report results (auto-generated)
├── pages/ # Page Object Model files for each page
├── tests/ # Test scripts
├── .gitignore # Files/folders to ignore in Git
├── README.md # Project documentation
├── package.json # Node.js dependencies and scripts
├── package-lock.json # Locked dependency versions
└── playwright.config.js # Playwright configuration

🧪 Test Scenarios
Q1 – Locked Out User Login

Login using locked_out_user

Verify the error message displayed on login failure

Q2 – Standard User Purchase Flow

Login using standard_user

Reset App State from hamburger menu

Add any three products to cart

Navigate to checkout

Verify product names and total price

Complete checkout

Verify successful order message

Reset App State again

Logout

Q3 – Performance Glitch User Flow

Login using performance_glitch_user

Reset App State

Filter products by Name (Z to A)

Add the first product to cart

Navigate to checkout

Verify product name and total price

Complete purchase

Verify success message

Reset App State

Logout

▶️ How to Install Dependencies

Run this command once after cloning the repository: npm install

▶️ How to Run Test Scenarios
🔹 Run All Tests Together (Sequentially) : npx playwright test

All tests (Q1, Q2, Q3) run one after another because workers: 1 is set in playwright.config.js.

🔹 Run Tests Individually

*** Run Q1 only

npx playwright test tests/Q1-saucedemo.spec.js

*** Run Q2 only

npx playwright test tests/Q2-saucedemo.spec.js

*** Run Q3 only

npx playwright test tests/Q3-saucedemo.spec.js

🔁 Sequential Execution Configuration

Sequential execution is controlled from playwright.config.js:

workers: 1

This ensures:

Q1 → Q2 → Q3 run in order

No parallel execution

📊 Allure Report Generation
✅ Configuration

Allure reporting is enabled in playwright.config.js:
reporter: [
  ['list'],
  ['allure-playwright']
]

▶️ How Allure Report Is Generated

After every test execution, Playwright automatically creates Allure result files in:
allure-results/

▶️ How to View Allure Report

*** Run this command in terminal after test execution: npx allure serve allure-results

This will:

Generate the Allure HTML report

Open it automatically in the browser

⚠️ Note:
The Allure report is generated after execution, not during test runtime.

📋 Terminal Test Result Output

After execution, Playwright shows results like:

Running 3 tests using 1 worker
✓ Q1 passed
✓ Q2 passed
✓ Q3 passed

This confirms:

Tests ran sequentially

All scenarios executed successfully. 

