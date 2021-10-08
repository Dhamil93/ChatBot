describe('Page Loads', () => {
    it('Chat is Visible', () => {
        cy.visit('index.html')
            cy.get('#messages')
                .should('exist')
                .should('be.visible')
            cy.get('#input')
                .should('exist')
                .should('be.visible')
                .should('have.attr', 'placeholder','Type Here...')
            cy.get('#octavia')
                .should('exist')
                .should('be.visible')
    }
    )
})