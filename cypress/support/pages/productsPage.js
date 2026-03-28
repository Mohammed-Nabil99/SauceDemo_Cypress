class ProductsPage {
    getAllItems() {
        return cy.get('.inventory_item')
    }

    firstItemShouldContain(text) {
        this.getAllItems().first().should('contain.text', text)
    }

    footerShouldContain(text) {
        cy.get('.footer_copy').should('exist').and('contain.text', text)
    }

    addItemToCart(itemId) {
        cy.get(`#add-to-cart-${itemId}`).click()
    }

    removeItemFromCart(itemId) {
        cy.get(`#remove-${itemId}`).click()
    }

    cartBadgeShouldBe(count) {
        cy.get('.shopping_cart_badge').should('contain', count)
    }

    clickCart() {
        cy.get('.shopping_cart_link').click()
    }
}

export default ProductsPage