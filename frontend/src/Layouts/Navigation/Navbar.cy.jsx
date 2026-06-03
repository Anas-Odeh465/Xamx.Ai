/* eslint-disable */
import React from 'react'
import Navbar from '../Navbar'


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