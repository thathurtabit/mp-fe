import response from '../../public/api/response.json';

const arrOfProdNo = response.Products.map(res => res.MoonpigProductNo);

const localhost = 'http://localhost:3000/card/';

describe('Single page tests', () => {
  it('Should successfully load each single page', () => {
    arrOfProdNo.forEach(productNo => {
      cy.visit(`${localhost}${productNo}`);

      cy.get(`article`)
        .first()
        .get('h1')
        .should('be.visible')
        .should('not.be.empty');

      cy.get(`article`)
        .get('img')
        .should('be.visible')
        .should('have.attr', 'alt')
        .and('not.be.empty');

      cy.get(`article`)
        .get('[data-buy-button]')
        .should('be.visible')
        .should('not.be.empty');
    });
  });
});
