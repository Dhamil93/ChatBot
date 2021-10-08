describe('Octavia responds with alt when Location is not Irish', () => {
    before(() => {
        cy.visit('index.html')

        cy.log('We greet Octavia')
        cy.get('#input')
            .type('Hello octavia{enter}', {delay: 200})
        cy.log('When the location is not in Ireland, Octavia should respond with a prompt to ask Google')
        cy.wait(1500)
    })

    it('Responds with alt when asked about Paris, France', () => {
        cy.get('#input')
            .type('Weather in Paris, France{enter}', {delay: 100})
        cy.wait(1250)
        cy.get('#bot span').last()
            .children('a')
        cy.get('#bot span a')
            .should('have.text', 'Google')
            .should('have.attr', 'target', '_blank')
        cy.log('We will now click the Google link')
        cy.wait(3000)
        cy.get('#bot span a')
            .click()
    })
})