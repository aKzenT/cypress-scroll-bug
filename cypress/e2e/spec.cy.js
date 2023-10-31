/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.visit('index.html')
    cy.get('#btn').click();
  })
})
