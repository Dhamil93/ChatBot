describe('Octavia responds with the weather', () => {
    before(() => {
        cy.visit('index.html')

        cy.log('We greet Octavia')
        cy.get('#input')
            .type('Hi octavia{enter}', {delay: 200})
        cy.wait(1500)
    })

    it('Responds with weather for various counties', () => {
        cy.log('We had a problem where counties did not register as locations')
        cy.log('To resolve this, we have included each counties capital city/town in an array where its name is different')
        cy.log('We will use Counties Loais and Offaly which normally would not return weather')
    })

    it('Responds with the weather in Laois', () => {
        cy.get('#input')
            .type('whats the weather like in Laois{enter}', {delay: 100})
        cy.wait(1250)
        cy.get('#bot span').last()
            .should('contain', "Here's what I found ")
        cy.wait(2250)
        cy.get('#weather')
            .should('exist').and('be.visible')
            .children('.card').its('length').should('eq', 3)
        cy.wait(1000)
    })

    it('Responds with the weather in Offaly', () => {
        cy.reload()
        cy.get('#input')
            .type('whats the weather like in Offaly{enter}', {delay: 100})
        cy.wait(1250)
        cy.get('#bot span').last()
            .should('contain', "Here's what I found ")
        cy.wait(2250)
        cy.get('#weather')
            .should('exist').and('be.visible')
            .children('.card').its('length').should('eq', 3)
    })
})