/// <reference types="cypress" />

describe('Aliases', () => {
  beforeEach(() => {
    cy.visit('/jetsetter');
    cy.get('[data-test="filter-items"]').as('filterinput');
    cy.get('@filterinput').type('Deoderant');
  });

  it('should remove all of the items from the page', () => {
    cy.contains('Deoderant');
  });
});
