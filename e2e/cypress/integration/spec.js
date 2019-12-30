it('loads homepage', () => {
  cy.visit('/')
  cy.contains('Software Testing Conferences').should('be.visible')
})

it('loads news page', () => {
  cy.visit('/news')
  cy.contains('Improvements are coming').should('be.visible')
})

it('loads subscribe page', () => {
  cy.visit('/subscribe')
  cy.contains('Want monthly updates').should('be.visible')
})