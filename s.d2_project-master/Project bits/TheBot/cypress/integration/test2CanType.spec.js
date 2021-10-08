describe('User Can Type', () => {

    it('Opens the file', () => {
        cy.visit('index.html')
    })
    it('Input box is visible', () => {
        cy.get('#input')
            .should('exist')
            .should('be.visible')
    })
    it('Can type in input box', () => {
        cy.get('#input')
            .type("We're mimicking a real typer?", {delay: 150})
            .type('{backspace}{backspace}{backspace}ist?', {delay: 150})
        cy.wait(1000)
        cy.get('#input')
            .type('{selectall}{backspace}Hello octavia', {delay: 200})
    })
})