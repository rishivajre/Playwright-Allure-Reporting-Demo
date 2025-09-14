🎭 Allure Playwright Demo

This repository demonstrates how to integrate Allure Report
 with Playwright
 for generating rich, interactive HTML test reports.

📁 Project Structure
Playwright-Allure-Demo/
├── tests/                  # Playwright test specs
├── allure-results/         # Allure raw results (auto-generated)
├── playwright.config.ts    # Playwright configuration
├── package.json            # Project dependencies and scripts
├── README.md               # Project documentation
└── ...

🚀 Features

Seamless integration of Allure with Playwright

Beautiful and customizable HTML reports

Metadata annotations (owner, severity, tags, etc.)

Step-by-step breakdown of test execution

Screenshots, videos, and trace attachments

Environment info and test plan filtering

📦 Prerequisites

Node.js ≥ 18

Java (required by Allure CLI)

Playwright installed in your project

🛠️ Setup Instructions
1. Install Dependencies

Install Playwright and Allure reporter:

npm install --save-dev @playwright/test allure-playwright
npx playwright install --with-deps

2. Configure Allure Reporter

Update your playwright.config.ts:

import { defineConfig } from '@playwright/test';
import * as os from 'node:os';

export default defineConfig({
  reporter: [
    ['line'],
    ['allure-playwright', {
      environmentInfo: {
        os_platform: os.platform(),
        os_release: os.release(),
        node_version: process.version,
      },
    }],
  ],
  use: {
    trace: 'on',       // captures trace for debugging
    screenshot: 'on',  // captures screenshots on failure
    video: 'on',       // captures video of test execution
  },
});


This enables Allure reporting with full debugging support.

▶️ Running Tests & Generating Report
3. Write a Test

Add a file in tests/ (e.g., tests/login.spec.ts).
Use Allure’s Runtime API for richer reporting. Example:

import { test } from '@playwright/test';
import * as allure from 'allure-js-commons';

test('Login Test', async () => {
  await allure.owner('QA Engineer');
  await allure.severity('critical');
  await allure.tag('authentication', 'smoke');
  await allure.step('Open login page', async () => {
    // test logic
  });
});

4. Run the Tests
npx playwright test


Raw results will be generated in the allure-results/ folder.

5. Install Allure CLI
npm install -g allure-commandline --save-dev

6. Generate & View Report
allure serve allure-results


This command will generate the report and automatically open it in a browser.

📎 Attachments

Attach files (e.g., screenshots, logs) to your reports:

await allure.attachment('Screenshot', '/path/to/image.png', {
  contentType: 'image/png',
  fileExtension: 'png',
});

📂 Test Plan Filtering

Run only selected tests using a testplan.json file:

export ALLURE_TESTPLAN_PATH=testplan.json
npx playwright test

🧭 Environment Info

System details can be automatically included in reports via environmentInfo in your config.

📸 Sample Report

📚 Resources

Allure Playwright Docs

Playwright Documentation

Allure Examples on GitHub

👉 Pro Tip: You can also add scripts in package.json for convenience:

"scripts": {
  "test:allure": "playwright test",
  "report:allure": "allure serve allure-results"
}


Then just run:

npm run test:allure
npm run report:allure
