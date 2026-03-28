import LoginPage from '../support/pages/loginPage'
import ProductsPage from '../support/pages/productsPage'
import CartPage from '../support/pages/cartPage'

describe('Cart Tests', () => {
    const loginPage = new LoginPage()
    const productsPage = new ProductsPage()
    const cartPage = new CartPage()

    beforeEach(() => {
        loginPage.visit()
        loginPage.login('standard_user', 'secret_sauce')
    })

    it('Add two items to cart', () => {
        productsPage.addItemToCart('sauce-labs-backpack')
        productsPage.addItemToCart('sauce-labs-bike-light')
        cartPage.cartBadgeShouldBe(2)
    })

    it('Remove one item', () => {
        productsPage.addItemToCart('sauce-labs-backpack')
        productsPage.addItemToCart('sauce-labs-bike-light')
        cartPage.removeItem('sauce-labs-backpack')
        cartPage.cartBadgeShouldBe(1)
    })
})