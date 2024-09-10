import chai from 'chai'

// all the warnings and even compilations errors will be resolved during runtime due to injection
const { expect } = chai

const expectVisibleAndClickable = async (element) => {
    const isDisplayed = await element.isDisplayed()
    const isEnabled = await element.isEnabled()

    expect(isDisplayed).to.be.true
    expect(isEnabled).to.be.true
}

const expectElementText = async (element, expectedText) => {
    const text = await element.getText()
    expect(text).to.equal(expectedText)
}

const waitForElement = async (element, timeout = 5000) => {
    await element.waitForDisplayed({ timeout })
}

const findByText = async (text) => {
    const byTextWildcard = `android=new UiSelector().text("${text}")`
    return await $(byTextWildcard)
}

export { expectVisibleAndClickable, expectElementText, waitForElement, findByText }
