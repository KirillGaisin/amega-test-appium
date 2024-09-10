# Appium + WebdriverIO + JavaScript Test Automation Framework

## Project Overview

This is a test automation framework for mobile applications using **Appium**, **WebdriverIO**, and **JavaScript**. It supports Android mobile testing and uses **Mocha** for test execution and **Chai** for assertions. The project is configured to automatically start and stop the Android emulator, run Appium services, and execute test cases.

## Prerequisites

1. **Node.js** (version 14 or above)
2. **Java Development Kit (JDK)** (version 8 or above)
3. **Android SDK** installed and environment variables set (`ANDROID_SDK_ROOT`, `JAVA_HOME`, etc.)
4. **Appium** (version 2.x)
5. **Appium drivers** for `UiAutomator2`
6. **WebdriverIO**

## Installation

1. Clone the repository.
   ```bash
   git clone https://github.com/your-repository-name
   cd your-repository-name
   ```
2. Install Node.js dependencies:
    ```bash
   npm install
   ```
3. Make sure your Android SDK environment is set up correctly:
    ```bash
   export ANDROID_SDK_ROOT=<path_to_android_sdk>
   export JAVA_HOME=<path_to_jdk>
   ```

## Running the tests

1. Project creates emulator and starts appium server automatically when you run any test, no need to do that manually
2. Execute tests, providing email and password of the user you want to run tests for
    ```bash
   npm run android-test -- --email example_email@amega.com --password example_password
   ```
   
## Folder Structure
```bash
    ├── src/
    ├── test/
    │   ├── android/           # Android-specific tests
    │   ├── helpers/           # Reusable helpers and utilities
    │   └── wdio.conf.js       # WebdriverIO configuration
    ├── app-1-.apk             # APK under test
    ├── package.json           # Node.js project config
    └── README.md              # Project documentation
```
## Writing Tests

Tests are written using Mocha and Chai. A sample test might look like this:
```js
import { expect } from 'chai'
import { expectVisibleAndClickable, expectElementText } from './helpers/assertion-helper.js'

describe('Android Sample Test', () => {
    it('should log in successfully', async () => {
        const signInButton = await $('~Sign in')
        await expectVisibleAndClickable(signInButton)
        await signInButton.click()

        const header = await $('~header')
        await expectElementText(header, 'Welcome, TestUser')
    })
})
```




