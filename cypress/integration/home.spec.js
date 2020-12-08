/// <reference types="cypress" />

context('Home', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should find the title of the homepage', () => {
    cy.get('h1').contains('Welcome');
  });

  it('should verify the homepage looks as expected', () => {
    cy.eyesOpen({
      appName: 'My App',
      testName: 'Homepage Check',
    });

    cy.eyesCheckWindow({
      tag: 'App Window',
      target: 'window',
      fully: true
    });

    cy.eyesClose();
  });
});
