# 🎭 Allure Playwright Demo

This repository demonstrates how to integrate [Allure Report](https://allurereport.org/docs/playwright/) with [Playwright](https://playwright.dev/) for generating rich, interactive HTML test reports.

---

## 📁 Project Structure

```
Playwright-Allure-Demo/
├── tests/                  # Playwright test specs
├── allure-results/         # Allure raw results (auto-generated)
├── playwright.config.ts    # Playwright configuration
├── package.json            # Project dependencies and scripts
├── README.md               # Project documentation
└── ...
```
<img width="1265" height="863" alt="image" src="https://github.com/user-attachments/assets/0cb141dc-7b26-4e7f-9249-20e0b57c4d5a" />

---

## 🚀 Features

- Seamless integration of Allure with Playwright
- Beautiful and customizable HTML reports
- Metadata annotations (owner, severity, tags, etc.)
- Step-by-step breakdown of test execution
- Screenshots and attachments support
- Environment info and test plan filtering

---

## 📦 Prerequisites

- Node.js ≥ 18
- Java (required by Allure CLI)
- Playwright installed in your project

---

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
npm install --save-dev @playwright/test allure-playwright
```

### 2. Configure Reporter

Update your `playwright.config.ts`:

```typescript
import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [
    ['line'],
    ['allure-playwright']
  ],
});
```

You can also pass custom options like `environmentInfo` for OS and Node version details:

```typescript
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
});
```

### 3. Run Tests

```bash
npx playwright test
```

Test results will be saved to the `allure-results` directory.

### 4. Generate Allure Report

```bash
allure serve allure-results
```

This will launch a browser window with the generated report.

---

## 🧪 Writing Enhanced Tests

Use Allure's Runtime API to enrich your test reports:

```typescript
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
```

---

## 📎 Attachments

Add screenshots or logs:

```typescript
await allure.attachment('Screenshot', '/path/to/image.png', {
  contentType: 'image/png',
  fileExtension: 'png',
});
```

---

## 📂 Test Plan Filtering

Run only selected tests using a test plan file:

```bash
export ALLURE_TESTPLAN_PATH=testplan.json
npx playwright test
```

---

## 🧭 Environment Info

Include system details in your config as shown above.

---

## 📸 Sample Report

<!-- Replace with actual screenshot if available -->
![Sample Allure Report](./assets/sample-report.png)

---

## 📚 Resources

- [Allure Playwright Docs](https://allurereport.org/docs/playwright/)
- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Allure Examples on GitHub](https://github.com/allure-framework/allure-examples)
