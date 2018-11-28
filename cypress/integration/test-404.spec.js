import { ErrorTitle, NoItemsTitle } from '../../src/utils/constants/constants';

describe('Error Page Tests', () => {
  it('Test 404 appears when invalid route added', () => {
    cy.visit('/borked-url-404');

    cy.get(`h1`)
      .should('be.visible')
      .contains(ErrorTitle);
  });

  it('Test 404 appears when invalid card requested', () => {
    cy.visit('/card/borked-product-no');

    cy.get(`h1`)
      .should('be.visible')
      .contains(NoItemsTitle);
  });
});
