describe('Homepage modal tests', () => {
  it('Should load home page', () => {
    cy.visit('/');
  });

  it('Should successfully load and close all modals', () => {
    cy.visit('/')
      .get('#card-list > li')
      .each((li, index) => {
        cy.get(`#card-thumb-${index}`)
          .first()
          .click({ force: true });

        cy.get(`[data-card-modal]`)
          .get('h1')
          .should('be.visible')
          .should('not.be.empty');

        cy.get(`[data-card-modal]`)
          .get('img')
          .should('be.visible')
          .should('have.attr', 'alt')
          .and('not.be.empty');

        cy.get(`[data-card-modal]`)
          .get('[data-buy-button]')
          .should('be.visible')
          .should('not.be.empty');

        cy.get(`[data-card-modal]`)
          .get('[data-close-modal]')
          .first()
          .click({ force: true });
      });
  });
});
