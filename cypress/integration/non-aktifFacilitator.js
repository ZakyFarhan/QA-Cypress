describe('Test Suit', function(){
    it('Nonaktifkan-Facilitator', function() {
        cy.visit('https://admin.pkh.dojobox.id/')
            cy.contains('Welcome Back!').should('have.text', 'Welcome Back!')    //Assertions
        cy.get('#input-email').type('e@dojobox.id').should('exist')
        cy.get('#input-password').type('admin{enter}')
            cy.contains('Facilitator').should('exist')      //Assertions
        cy.get('#dataTable_filter > label > .form-control').type('te22st@gmail.com')
        cy.wait(1350)
        cy.get('.btn-group > .btn > .fas').click()
        cy.get('span.dropdown-item').click()
        cy.get('#generalModal > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    })
})