import { join } from 'node:path'
import { startEmulator, stopEmulator } from './android/utils/emulator.js'

export const config = {
    runner: 'local',
    port: 4723,
    path: '/',
    specs: [
        join(process.cwd(), 'test/android/*.js'),
    ],
    exclude: [],
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'emulator-5554',
        'appium:automationName': 'UiAutomator2',
        'appium:app': join(process.cwd(), 'app-1-.apk'),
        'appium:autoGrantPermissions': true,
        'appium:ignoreHiddenApiPolicyError': true,
        'appium:fullReset': true,
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 20000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
    },
    onPrepare: function () {
        startEmulator()
    },
    onComplete: function () {
        stopEmulator()
    },
}
