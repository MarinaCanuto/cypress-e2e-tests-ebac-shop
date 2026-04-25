class LoginPage {
  visitar() {
    cy.visit('/minha-conta')
  }

  login(usuario, senha) {
    cy.get('#username', { timeout: 10000 })
      .should('be.visible')
      .clear()
      .type(usuario)

    cy.get('#password')
      .should('be.visible')
      .clear()
      .type(senha, { log: false })

    cy.get('.woocommerce-form > .button')
      .should('be.visible')
      .click()

    // 🔥 garante que o login terminou
    cy.url({ timeout: 10000 }).should('include', 'minha-conta')
  }
}

export default new LoginPage()