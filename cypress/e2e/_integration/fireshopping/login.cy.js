/// <reference types="cypress" />

describe("Testing user login", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("It renders properly", () => {
    cy.contains("FireShopping");
  });

  it("Can acces login route", () => {
    cy.contains("Login").should("not.exist");
    cy.contains("Login").click();
    cy.contains("Login");
  });

  it("Can acces register route", () => {
    const registerTitle = "Regístrate y empieza a disfrutar de FireShopping";
    cy.contains(registerTitle).should("not.exist");
    cy.contains("Register").click();
    cy.contains(registerTitle);
  });

  it("Can register user", () => {
    const email = "testing@fireshopping.com";
    const password = "testing";
    cy.contains("Register").click();
    cy.get('input[placeholder="Email"]').type(email);
    cy.get('input[placeholder="Password"]').type(password);
    cy.contains('Register me!').click()
    cy.contains('Home').should('exist') 
  });

  it("User can run session", () => {
    const email = "testing@fireshopping.com";
    const password = "testing";
    cy.contains("Login").click();
    cy.get('input[placeholder="Email"]').type(email);
    cy.get('input[placeholder="Password"]').type(password);
    cy.contains("Start").click();
    cy.contains('Logout').should('exist')
  });
});

describe('Testing notes list functionality', () => {
  it('Warning text if user is not loged', () => {
    cy.get('div.list-route').click
  })
})
