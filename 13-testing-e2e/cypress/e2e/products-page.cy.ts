describe('Products page', () => {
  it('Redirect to products', () => {
    cy.visit('/products');
    const button = cy.get('[data-testid="button"]').first();
    button.should('have.text', 'Add to cart');

    button.click();

    cy.get('[data-testid="cart-items"]').should('contain.text', '1');
  });

//   it('Check product cart title', () => {
    
//   });
});
