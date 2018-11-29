describe('My Sample Test', () => {
  it('Should open home page', () => {
  //   cy.server()
  //   // we set the response to be the activites.json fixture
  //   cy.route('GET', 'api/*', 'fixture:/api/response.json')
    cy.visit('/');
  });
});
