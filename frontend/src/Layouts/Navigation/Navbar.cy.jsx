/* eslint-disable */
import Navbar from './Navbar';
import React from 'react';


describe('Mobile Menu', () => {
  it('closes menu when clicking again', () => {
  cy.viewport(375, 700);

  cy.mount(<Navbar />);

  cy.get('[data-testid="menu-btn"]').click();
  cy.get('[data-testid="mobile-menu"]').should('be.visible');

  cy.get('[data-testid="menu-btn"]').click();
  cy.get('[data-testid="mobile-menu"]').should('not.be.visible');
});
});