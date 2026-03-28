import LoginPage from '../support/pages/loginPage'
import ProductsPage from '../support/pages/productsPage'
import CartPage from '../support/pages/cartPage'
import CheckoutPage from '../support/pages/checkoutPage'

describe('Checkout Tests', () => {
    const loginPage = new LoginPage()
    const productsPage = new ProductsPage()
    const cartPage = new CartPage()
    const checkoutPage = new CheckoutPage()

    beforeEach(() => {
        loginPage.visit()
        loginPage.login('standard_user', 'secret_sauce')
        productsPage.addItemToCart('sauce-labs-backpack')
        productsPage.clickCart()
        cartPage.clickCheckout()
    })

    it('Complete checkout with valid data', () => {
        checkoutPage.enterFirstName('John')
        checkoutPage.enterLastName('Doe')
        checkoutPage.enterPostalCode('12345')
        checkoutPage.clickContinue()
        checkoutPage.clickFinish()
        checkoutPage.verifyThankYouMessage()
    })

    it('Validation error without required field', () => {
        checkoutPage.enterFirstName('John')
        checkoutPage.enterPostalCode('12345')
        checkoutPage.clickContinue()
        checkoutPage.verifyErrorExists()
    })
})