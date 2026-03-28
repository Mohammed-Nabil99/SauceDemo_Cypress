Cypress.Commands.add('login', (username, password) => {
    cy.get('#user-name').type(username)
    cy.get('#password').type(password)
    cy.get('#login-button').click()
})

Cypress.Commands.add('addToCart', (productId) => {
    cy.get(`#add-to-cart-${productId}`).click()
})

Cypress.Commands.add('removeFromCart', (productId) => {
    cy.get(`#remove-${productId}`).click()
})