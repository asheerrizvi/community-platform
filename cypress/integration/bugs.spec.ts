describe('[Bugs]', () => {
  it.skip('[#636]', () => {
    cy.visit('/how-to')
    cy.step('Tags shown on how-to load')
    cy.get('[data-cy=card]')
      .contains('Create an extruded lamp')
      .within($card => {
        expect($card).to.contain('product')
        expect($card).to.contain('extrusion')
      })
  })

  it.skip('[#639]', () => {
    cy.visit('/how-to')
    cy.step('Displays message when no how-tos found')
    cy.get('[data-cy=tag-select]').click()
    cy.get('.data-cy__menu')
      .contains('extrusion')
      .click()
    cy.get('[data-cy=tag-select]').click()
    cy.get('.data-cy__menu')
      .contains('howto_testing')
      .click()
    // TODO - replace with appropriate expected text once coded
    cy.get('div')
      .contains('loading...')
      .should('not.exist')
  })

  it.skip('[#640]', () => {
    cy.step('Open the create-how-to page with its url')
    cy.visit('/how-to')
    cy.logout()
    cy.login('howto_creator@test.com', 'test1234')
    cy.visit('/how-to/create')
      .url()
      .should('include', '/how-to/create')
    cy.get('div')
      .contains('How-to Guidelines')
      .should('be.exist')
  })
})