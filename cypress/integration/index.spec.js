describe('Pun Generator App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5000')
  })

  it('adds a dad joke to the page when the button is clicked', () => {
    cy.contains('Click me for a terrible pun').click()
    cy.contains('My ceiling isn’t the best, but it’s up there.')
  })

  it('tells the user when it is all out of puns', () => {
    const button = cy.contains('Click me for a terrible pun')
    for (let i = 0; i < 20; i++) {
      button.click()
    }
    cy.contains("I'm all out of puns!")
  })
})