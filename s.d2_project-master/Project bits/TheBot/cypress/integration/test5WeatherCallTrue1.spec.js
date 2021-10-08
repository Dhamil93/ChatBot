describe('Octavia responds with the weather when asked', () => {
    before(() => {
        cy.visit('index.html')

        cy.log('We greet Octavia')
        cy.get('#input')
            .type('Hi octavia{enter}', {delay: 200})
        cy.log('Some counties have the same name as their capital city')
        cy.wait(1500)
    })

    it('Responds with the weather in Dublin', () => {
        cy.get('#input')
            .type('whats the weather like in Dublin{enter}', {delay: 100})
        cy.wait(1250)
        cy.get('#bot span').last()
            .should('contain', "Here's what I found ")
        cy.wait(2250)
        cy.get('#weather')
            .should('exist').and('be.visible')
            .children('.card').its('length').should('eq', 3)
    })

    it('Responds with the weather in Cork', () => {
        cy.reload()
        cy.get('#input')
            .type('whats the weather like in Cork{enter}', {delay: 100})
        cy.wait(1250)
        cy.get('#bot span').last()
            .should('contain', "Here's what I found ")
        cy.wait(2250)
        cy.get('#weather')
            .should('exist').and('be.visible')
            .children('.card').its('length').should('eq', 3)
    })
})