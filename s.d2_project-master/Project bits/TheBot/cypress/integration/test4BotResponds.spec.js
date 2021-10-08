describe('The Bot Responds', () => {
    before(() => {
        cy.log('First we open the page')
        cy.visit('index.html')
    })

    it('Type in a hello statement', () => {
        cy.get('#input')
            .type('Hello octavia{enter}', {delay: 150})
    })
    it('Bot responds', () => {
        cy.log('We check the bot has its chat logged')
        cy.get('#bot')
            .should('exist')
            .should('be.visible')
    })
    it('Bot response renders correctly', () => {
        cy.log("We check DOM to see bot's response renders correctly")
        cy.get('#bot')
            .children('.avatar', 'span')
        cy.get('#bot .avatar')
            .should('have.attr', 'src').should('include', 'OctaviaIcon')
    })
})