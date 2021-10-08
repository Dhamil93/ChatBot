describe('User Can Enter Their Text', () => {

    before(() => {
        cy.log('First, open the page')
        cy.visit('index.html')

        cy.log('At this point we know our DOM rendered')
        cy.get('#messages')
            .should('exist')
            .should('be.visible')
        cy.get('#input')
            .should('exist')
            .should('be.visible')
    })

    it('Can type in input box', () => {
        cy.log('We mimic a real user typing "Hello octavia"')
        cy.get('#input')
            .type('Hello octavia', {delay: 200})
    })

    it('User side log appears on enter', () => {
        cy.get('#input')
            .type('{enter}')
        cy.wait(500)
        cy.get('#user')
            .should('exist')
            .should('be.visible')
            .children()
    })

    it('User side chat logged correctly', () => {
        cy.get('#user')
            .children('.avatar','span')
        cy.get('#user span')
            .should('have.text', 'Hello octavia')
    })
})