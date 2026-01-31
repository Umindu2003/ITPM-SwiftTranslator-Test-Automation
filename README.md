# IT3040 Assignment 1 – Singlish to Sinhala Test Automation

## Module Information
IT3040 – IT Project Management  
BSc (Hons) in Information Technology – Year 3  
Semester 1

## Overview
This repository contains an automated test suite implemented using Playwright to evaluate the Singlish to Sinhala transliteration accuracy and user interface behavior of the SwiftTranslator web application.

Application under test:  
https://www.swifttranslator.com/

This project follows Option 1 of the IT3040 Assignment 1 specification. Testing is limited to functional accuracy and UI behavior. Backend APIs, performance testing, and security testing are excluded.

---

## Objectives
- Evaluate the accuracy of Singlish to Sinhala conversion
- Identify incorrect or failed transliteration scenarios
- Validate real-time UI behavior during input
- Automate all test scenarios using Playwright
- Document results using the provided Excel test case template

---

## Test Coverage
- 24 Positive Functional Test Cases  
  - Sentence structure variations  
  - Tense variations  
  - Daily conversational language  
  - Mixed Singlish and English inputs  
  - Short, medium, and long input lengths  

- 10 Negative Functional Test Cases  
  - Robustness and incorrect behavior scenarios  
  - Formatting and complex input handling  

- 1 UI Test Case  
  - Real-time Sinhala output update behavior  

---

## Technologies Used
- Playwright
- JavaScript
- Node.js
- npm

---

## Project Structure
├── tests/
│ └── swifttranslator.spec.js
├── playwright.config.js
├── package.json
├── package-lock.json
└── README.md

---

## Prerequisites
- Node.js (version 16 or higher)
- npm

---

## Installation
npm install
npx playwright install

---

## Running Tests
npx playwright test

---

## Viewing Test Reports
npx playwright show-report

---

## Test Case Documentation
All test cases are documented in an Excel file using the template provided in Appendix 2 of the assignment specification. Test cases are original and do not reuse examples from the sample template.

---

## Compliance Statement
This project complies with all requirements of IT3040 Assignment 1, including test coverage, automation, documentation standards, and submission guidelines.


