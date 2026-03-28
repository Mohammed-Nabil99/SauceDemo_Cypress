import LoginPage from '../support/pages/loginPage'

describe('Login Tests', () => {
    const loginPage = new LoginPage()

    it('Login with standard user', () => {
        loginPage.visit()
        loginPage.login('standard_user', 'secret_sauce')
        cy.url().should('include', '/inventory.html')
    })

    it('Login fails with locked_out_user', () => {
        loginPage.visit()
        loginPage.login('locked_out_user', 'secret_sauce')
        cy.get('[data-test=error]').should('exist')
    })
})