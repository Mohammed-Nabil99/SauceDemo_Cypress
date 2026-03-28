class CheckoutPage {
    enterFirstName(name) {
        cy.get('#first-name').type(name)
    }

    enterLastName(name) {
        cy.get('#last-name').type(name)
    }

    enterPostalCode(code) {
        cy.get('#postal-code').type(code)
    }

    clickContinue() {
        cy.get('#continue').click()
    }

    clickFinish() {
        cy.get('#finish').click()
    }

    verifyThankYouMessage() {
        cy.get('.complete-header').should('have.text', 'Thank you for your order!')
    }

    verifyErrorExists() {
        cy.get('[data-test="error"]').should('exist')
    }
}

export default CheckoutPage