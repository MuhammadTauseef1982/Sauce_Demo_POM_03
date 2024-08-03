/// <reference types="cypress"/>

describe('template spec', () => {

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

  it('passes', () => {
    cy.viewport(1900,1000)
    cy.visit('https://www.saucedemo.com/v1/')
    //assertions
    cy.url().should('eq','https://www.saucedemo.com/v1/')
    cy.title().should('contain','Swag')
    cy.get('#login_credentials > h4').should('have.text','Accepted usernames are:')
    
    //login data
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    
    cy.get('#login-button').click()
    cy.url().should('contain','/inventory.html')
    cy.get('.product_label').should('have.text','Products')
    cy.get('#inventory_filter_container select').select('Price (low to high)')
    
    // cy.get(':nth-child(1) > .pricebar > .btn_primary').click()

    //select all the items both loops are working fine
    // cy.get('.inventory_list .pricebar').each(($el) => {
    //  cy.wrap($el).find('.btn_primary').click()
    // })
    
    cy.get('.inventory_item').each(($el) => {
      cy.wrap($el).find('button').click()
     })
 

    cy.get('#shopping_cart_container > a > span').click()
    cy.get('.fa-layers-counter').click()
    cy.get('.subheader').should('have.text','Your Cart')
    cy.url().should('contain','/v1/cart.html')
    cy.get('.btn_action').click()
    cy.get('.subheader').should('have.text','Checkout: Your Information')
    cy.url().should('contain','/checkout-step-one.html')
    cy.get('[data-test="firstName"]').type('Tauseef')
    cy.get('[data-test="lastName"]').type('Amin')
    cy.get('[data-test="postalCode"]').type('74000')
    cy.get('.btn_primary').click()

    cy.get('.subheader').should('have.text','Checkout: Overview')
    cy.url().should('contain','/v1/checkout-step-two.html')
    cy.get('.btn_action').click()


    cy.get('.subheader').should('have.text','Finish')
    cy.url().should('contain','/v1/checkout-complete.html')
    cy.get('.complete-header').should('have.text', "THANK YOU FOR YOUR ORDER")

  })

})
