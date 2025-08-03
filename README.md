# 📱 Mobile App Automation Testing with WebdriverIO + Appium + Allure + Azure DevOps

---

## 📂 Project Structure

```
├── e2e/                   # Test Specs
├── wdio.conf.js           # WebdriverIO Config
├── package.json
├── reports/               # Allure Results
├── allure-report/         # Generated Allure Report
├── README.md
```

---

## 🛠️ Prerequisites

* Install nopcommerce app from Play Store on emulator or a physical device 

* Node.js >= 18.x
* Java >= 11.x
* Appium Server installed globally:

  ```bash
  npm install -g appium
  ```
* Android SDK & Emulator / Real Device connected to Vysor
* WebdriverIO CLI installed globally (optional):

  ```bash
  npm install -g @wdio/cli
  ```

---

## 📝 Setup Project Locally

1️⃣ Clone this repo:

```bash
git clone <repo-url>
cd <project-folder>
```

2️⃣ Install Dependencies:

```bash
npm install
```

3️⃣ Install Allure Commandline (for report generation):

```bash
npm install -g allure-commandline --save-dev
```

---

## 📲 Installing the App on Device/Emulator

If testing an app available on **Google Play Store**, install it manually first:

```bash
# Open Google Play Store on Emulator/Device
# Search for the app (e.g., Bagisto Mobikul)
# Install it manually

# Verify Installation:
adb shell pm list packages | findstr "bagisto"
```

✅ Ensure you have correct `appPackage` and `appActivity` configured in `wdio.conf.js`

---

## 🚀 Run Tests Locally

Start Appium Server manually:

```bash
appium
```

Then in another terminal:

```bash
npx wdio run wdio.conf.js
```

---

## 📊 Generate & Open Allure Report

```bash
allure generate ./reports/allure-results --clean -o ./allure-report
allure open ./allure-report
```

---

## 🏗️ Running in Azure DevOps Server Pipeline

1️⃣ Add the following YAML in your pipeline:

```yaml
trigger:
  branches:
    include:
      - main

pool:
  vmImage: 'windows-latest'

steps:
- task: NodeTool@0
  inputs:
    versionSpec: '18.x'
  displayName: 'Install Node.js'

- script: |
    npm install -g appium
    npm install
    npm run wdio
  displayName: 'Run Mobile Tests'

- script: |
    npx allure generate ./reports/allure-results --clean -o ./allure-report
    npx allure open ./allure-report
  displayName: 'Generate Allure Report'
```

---

## 📋 Example NPM Scripts in `package.json`

```json
"scripts": {
  "wdio": "wdio run wdio.conf.js",
  "allure:report": "allure generate ./reports/allure-results --clean -o ./allure-report",
  "allure:open": "allure open ./allure-report"
}
```

---

## ❗ Common Issues & Fixes

* **App not launching automatically:**
  Ensure `"noReset": false` and `"fullReset": false` in capabilities

* **Appium Permissions Popup:**
  Add to capabilities:

  ```json
  "autoGrantPermissions": true
  ```

* **Element Not Found:**
  Use Appium Inspector to validate locators

---

## 📝 Author's Note

If you hit issues with Azure DevOps self-hosted agent and emulator configuration — reach out for a tailored pipeline config.

---

## 💬 Need Help?

Feel free to raise an issue or contact the maintainer.

---
