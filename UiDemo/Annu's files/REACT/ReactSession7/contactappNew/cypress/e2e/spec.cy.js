describe('Contact Manager E2E Test Cases', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Should check for wrong credentials', () => {
    cy.get("#email").type("Peter@gmail.com");
    cy.get("#password").type("1234");
    cy.get("#btnLogin").click();
    cy.wait(1000);
    cy.get(".alert").should("have.text", "Incorrect email or password");
  });

  it("Should check for correct credentials", () => {
    cy.get("#email").type("Peter@gmail.com");
    cy.get("#password").type("123456");
    cy.get("#btnLogin").click();
    cy.wait(1000);
    cy.get("#heading1").should("have.text", "Contact List");
  });


})