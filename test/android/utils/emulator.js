import { execSync, spawn } from 'child_process'

/**
 * Start Android Emulator
 */
export function startEmulator() {
    console.log('Starting Android emulator...')
    spawn('emulator', ['-avd', 'myEmulator'], { stdio: 'inherit', shell: true })

    console.log('Waiting for emulator to be fully booted...')
    execSync(`adb wait-for-device`)
    execSync(`adb shell getprop sys.boot_completed | grep 1`)
}

/**
 * Stop Android Emulator
 */
export function stopEmulator() {
    console.log('Shutting down Android emulator...')
    execSync(`adb -s emulator-5554 emu kill`)
}
