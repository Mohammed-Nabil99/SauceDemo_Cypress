import LoginPage from '../support/pages/loginPage'
import ProductsPage from '../support/pages/productsPage'

describe('Products Feature – Sauce Demo', () => {
    const loginPage = new LoginPage()
    const productsPage = new ProductsPage()

    beforeEach(() => {
        loginPage.visit()
        loginPage.login('standard_user', 'secret_sauce')
    })

    it('Products page loads with items', () => {
        cy.url().should('include', '/inventory.html')
        productsPage.getAllItems().should('have.length.greaterThan', 0)
    })

    it('Footer is visible', () => {
        productsPage.footerShouldContain('© 2026 Sauce Labs. All Rights Reserved.')
    })
})