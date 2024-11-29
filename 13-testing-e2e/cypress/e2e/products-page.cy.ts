describe('Products page', () => {
  beforeEach(() => {
    cy.visit('/products');

    cy.intercept('GET', 'https://fakestoreapi.com/products', [
      {
        id: 1,
        title: 'test title',
        description: 'test description',
        price: 123,
      },
    ]).as('getProducts');
  });

  it('Redirect to products', () => {
    const button = cy.get('[data-testid="button"]').first();
    button.should('have.text', 'Add to cart');

    button.click();

    cy.get('[data-testid="cart-items"]').should('contain.text', '1');
  });

  it('Check product cart title', () => {
    cy.reload();
    cy.wait('@getProducts');

    cy.get('[data-testid="title"]').should('contain.text', 'test title');
  });
});
