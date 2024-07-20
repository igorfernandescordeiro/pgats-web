class Menu {
    menus = {
        PRODUTOS: 'Products',
        CADASTRO: 'Signup',
        ENTRE_EM_CONTATO:'Contact us'
    }
    irParaProdutos(){
        cy.contains(`Products`).click()
        return this;
    }

    irParaCadastro(){
        cy.contains(`Signup`).click()
        return this;
    }

    irParaEntreEmContato(){
        cy.contains(`Contact us`).click()
        return this;
    }

    irPara(menu) {
        cy.contains(menu).click()
        return this;
    }
};

export default new Menu()