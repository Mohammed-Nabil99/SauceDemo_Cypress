class CartPage {
    clickCheckout() {
        cy.get('#checkout').click()
    }

    removeItem(itemId) {
        cy.get(`#remove-${itemId}`).click()
    }

    cartBadgeShouldBe(count) {
        cy.get('.shopping_cart_badge').should('contain', count)
    }
}

export default CartPage