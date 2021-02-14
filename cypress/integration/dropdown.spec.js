/* eslint-disable no-undef */
describe('Dropdown functionality', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('should have a dropdown visible', () => {
    cy.get('[data-qa="drowndown"]').click();
    cy.get('[data-qa="blue"]')
      .should('contain.text', 'The Colour Blue')
      .click();
  });
});
