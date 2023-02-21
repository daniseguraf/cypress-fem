/// <reference types="cypress" />

describe('Cypress exercises', () => {
  before(() => {
    cy.visit('/jetsetter');
  });

  xdescribe('Adding new item', () => {
    it('should add a new item', () => {
      const item = 'Nuevo item 1';

      cy.get('[data-test="new-item-input"]').type(item);
      cy.get('[data-test="add-item"]').click();
      cy.contains(item);
    });

    it('should put a new item in the "Upacked Items" list', () => {
      const item = 'Nuevo item 1';

      cy.get('[data-test="new-item-input"]').type(item);
      cy.get('form').submit();

      cy.get('[data-test="items-unpacked"]').contains(item);
    });

    it('should be the last item added', () => {
      const item = 'Nuevo item 1';

      cy.get('[data-test="new-item-input"]').type(item);
      cy.get('form').submit();

      cy.get('[data-test="items-unpacked"] li').contains(item).last();
    });
  });

  xdescribe('filtering items', () => {
    it('should filter items on the page', () => {
      const filter = 'Tooth';
      const result1 = 'Tooth Brush';
      const result2 = 'Tooth Paste';

      cy.get('[data-test="filter-items"]').type(filter);
      cy.contains(result1);
      cy.contains(result2);
    });

    it('should not show items that do not match the filter', () => {
      const filter = 'Tooth';

      cy.get('[data-test="filter-items"]').type(filter);
      cy.contains('Hoodie').should('not.exist');
    });
  });

  xdescribe('removing items', () => {
    it('should remove all of the items from the page', () => {
      cy.get('[data-test="remove-all"]').click();
      cy.should('not.include.text', 'Tooth Brush');
      cy.contains('No items to show');
    });
  });

  describe('aliases', () => {
    it('should remove all of the items from the page', () => {
      cy.get('[data-test="filter-items"]').as('filterinput');
      cy.get('@filterinput').type('Deoderant');

      cy.contains('Deoderant');
    });
  });
});
