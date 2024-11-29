describe('Home page', () => {
  it('Redirect to products', () => {
    cy.visit('/');
    cy.url().should('include', 'products');
  });
});
