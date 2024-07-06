/// <reference types="cypress" />
// com esse reference types ele tras todas as sugestoes do cy.

describe('Automation exercise', () => {
    it('Test Case 1: Cadastrar um usuário', () => {
        const timestamp = new Date().getTime();
        const signUpName = 'Tester01 QA';

        cy.visit('https://automationexercise.com/');
        cy.get('a[href$=login]').click();
        // cy.contains('Signup').click();
       cy.get('[data-qa="signup-name"]').type(signUpName);
       cy.get('[data-qa="signup-email"]').type(`teste${timestamp}qa@email.com`);
       cy.contains('button', 'Signup').click();

       cy.get('input[type=radio]').check('Mrs');
       cy.get('[data-qa="password"]').type('123456', {log: false});
       cy.get('[data-qa="days"]').select('14');
       cy.get('[data-qa="months"]').select('May');
       cy.get('[data-qa="years"]').select('1990');

       cy.get('input[type=checkbox]#newsletter').check();
       cy.get('input[type=checkbox]#optin').check();

       cy.get('[data-qa="first_name"]').type('Aaaaaa');
       cy.get('[data-qa="last_name"]').type('bbbbbb');
       cy.get('[data-qa="company"]').type('CR7');
       cy.get('[data-qa="address"]').type('AV DOM');
       cy.get('[data-qa="address2"]').type('Num 1000');
       cy.get('[data-qa="country"]').select('Canada');
       cy.get('[data-qa="state"]').type('Do Canada');
       cy.get('[data-qa="city"]').type('toronto');
       cy.get('[data-qa="zipcode"]').type('010101');
       cy.get('[data-qa="mobile_number"]').type('123123');

       cy.get('[data-qa="create-account"]').click();


        // Asserts
       cy.url().should('includes', 'account_created');
       cy.get('[data-qa="account-created"]').should('be.visible');

       cy.get('[data-qa="continue-button"]').click();

       cy.contains(`Logged in as ${signUpName}`);

    });
});

/* 
Triplo A - Arrange, Act e Assert

    Preparacao - Arrange 
      - acessando o site 
      - criando alguma massa de dados 
      - navegando para alguma página
    
    Acao - Act
      - preencher e salvar o formulario 
      - confirmar a exclusao

    Resultado esperado - Assert
      - visualizar a tela de cadastrar concluído
      - confirmar que a exclusao foi feita
*/

/* 
Test Case 1: Register User
Test Case 2: Login User with correct email and password
Test Case 3: Login User with incorrect email and password
Test Case 4: Logout User
Test Case 5: Register User with existing email
Test Case 6: Contact Us Form
Test Case 8: Verify All Products and product detail page
Test Case 9: Search Product
Test Case 10: Verify Subscription in home page
Test Case 15: Place Order: Register before Checkout
 */