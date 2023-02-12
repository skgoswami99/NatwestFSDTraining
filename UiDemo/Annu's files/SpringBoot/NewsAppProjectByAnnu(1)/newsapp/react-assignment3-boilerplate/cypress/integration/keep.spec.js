describe('UI testing for keep', () => {

    beforeEach(() => {
        cy.visit('/')
    })

it(' username is Correct',()=>{
    cy.get('input[name= username]').type('admin');
    cy.get('input[name= password').type('password');
    cy.get('#login').click();
});

it('Error username is wrong',()=>{
    cy.get('input[name= username]').type('adm');
    cy.get('input[name= password').type('password');
    cy.get('#login').click();
    cy.get('p').should('be.visible');
});
it('Error password is wrong',()=>{
    cy.get('input[name= username]').type('admin');
    cy.get('input[name= password').type('passw');
    cy.get('#login').click();
    cy.get('p').should('be.visible');
});
it('Correct URL is present',()=>{
    cy.url().should('include',"3000/");
});
})