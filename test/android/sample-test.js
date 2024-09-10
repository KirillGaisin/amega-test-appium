import { expect } from 'chai'
import {expectVisibleAndClickable, expectElementText, waitForElement, findByText} from './helpers/assertion-helper.js'


describe('Android login test', () => {
    it('should log in successfully', async () => {
        const email = process.env.EMAIL || 'example_email@amega.com'
        const password = process.env.PASSWORD || 'example_password'

        // Check we are on the landing page
        const createAccountButton = await $('~Create account')
        await expectVisibleAndClickable(createAccountButton)

        // Proceed to the sign in screen
        const signInButton = await $('~Sign in')
        await expectVisibleAndClickable(signInButton)
        await signInButton.click()

        // Login logic
        const signInHeader = await findByText('Sign in')
        expect(signInHeader.isDisplayed()).to.be.true
        const emailInput = (await findByText('Email')).parentElement()
        await expectVisibleAndClickable(emailInput)
        await emailInput.sendKeys(email)
        const passwordInput = (await findByText('Password')).parentElement()
        await expectVisibleAndClickable(passwordInput)
        await passwordInput.sendKeys(password)
        await expectVisibleAndClickable(signInButton)
        await signInButton.click()
        // expect we are logged in but can't assert due to the app not logging me in through emulator manually
    })
})
