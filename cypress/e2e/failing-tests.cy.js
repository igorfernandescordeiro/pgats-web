

describe('Cadastrar entradas e saídas com bug', () => {
  it.only('Cadastrar uma nova transação de entrada - falha 1', () => {

    cy.visit('https://devfinance-agilizei.netlify.app');

    const descricao = 'Mesada'

    cy.contains("Nova Transação").click();
    cy.get("#description").type(descricao);
    cy.get("#amount").type(100);
    cy.get("#date").type("2023-02-01");

    cy.contains("Salvar").click();

    cy.get('#data-table tbody tr').should('have.length.at.least', 1);
    cy.get('tbody tr').contains('td.description', descricao). should('exist');

  });
});