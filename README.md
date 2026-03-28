# SauceDemo Cypress Automation Project

Automated end-to-end tests for [SauceDemo](https://www.saucedemo.com/) using **Cypress** and **Page Object Model (POM)**, with **Mochawesome HTML/JSON reports**.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies](#technologies)
- [Folder Structure](#folder-structure)
- [Test Scenarios](#test-scenarios)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Test Reporting](#test-reporting)

---

## Project Overview

This project automates core workflows on SauceDemo:

1. **Login**
   - Successful login (`standard_user`)
   - Failed login (`locked_out_user`)

2. **Products Page**
   - Verify product listings and footer

3. **Cart**
   - Add and remove items
   - Verify cart badge updates

4. **Checkout**
   - Complete checkout with valid data
   - Validation error for missing fields

Tests are implemented using **POM** for reusability and maintainability.

---

## Technologies

- [Cypress](https://www.cypress.io/) v15.13.0
- JavaScript (ES6)
- Mochawesome for HTML/JSON reporting
- Node.js & npm

---

## Folder Structure

```text
SauceDemo-Cypress/
├─ cypress/
│  ├─ e2e/
│  │  ├─ cart.cy.js
│  │  ├─ checkout.cy.js
│  │  ├─ login.cy.js
│  │  └─ products.cy.js
│  ├─ fixtures/
│  │  ├─ users.json
│  ├─ reports/
│  │  ├─ assets
│  │  └─ report.html
│  ├─ support/
│  │  ├─ e2e.js
│  │  └─ pages/
│  │     ├─ loginPage.js
│  │     ├─ productsPage.js
│  │     ├─ cartPage.js
│  │     └─ checkoutPage.js
├─ package.json
├─ cypress.config.js
└─ README.md
```

---

## Test Scenarios

This project automates the following workflows on SauceDemo:

### Login Tests
- Successful login with `standard_user`
- Failed login with `locked_out_user`

### Products Tests
- Verify product listings
- Verify footer text

### Cart Tests
- Add items to cart
- Remove items from cart
- Verify cart badge count

### Checkout Tests
- Complete checkout with valid data
- Validation error when required fields are missing

---

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Mohammed-Nabil99/SauceDemo_Cypress
cd SauceDemo-Cypress
npm install
```

---

## Running Tests

Run tests in **headless mode**:

```bash
npx cypress run
```

Or open the **Cypress Test Runner GUI**:

```bash
npx cypress open
```

---

## Test Reporting

This project uses **Mochawesome** to generate HTML and JSON reports.

### Generate Report

Reports are automatically generated when running:

```bash
npx cypress run
```

### Where to Find Reports

- **HTML Report:** `cypress/reports/mochawesome.html`  

> Open the HTML file in a browser to view all test results in a readable format.
