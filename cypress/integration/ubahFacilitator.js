describe('Test Suit', function(){
    it('Ubah-Facilitator', function() {
        cy.visit('https://admin.pkh.dojobox.id/')
            cy.contains('Welcome Back!').should('have.text', 'Welcome Back!')    //Assertions
        cy.get('#input-email').type('e@dojobox.id').should('exist')
        cy.get('#input-password').type('admin{enter}')
            cy.contains('Facilitator').should('exist')      //Assertions
        cy.get('#dataTable_filter > label > .form-control').type('te22st@gmail.com')
        cy.wait(1350)
        cy.get('.btn-group > .btn > .fas').click()
        cy.get('[href="facilitator/edit/217"]').click()
        cy.get('#user_fullname').clear().type('Facilitator-test-new')
        cy.get('#user_email').clear().type('te22st-new@gmail.com')
        cy.get('#user_password').clear().type('admin123new')
        cy.get('#user_province_id').select('DKI JAKARTA').should('have.value', '31')
        cy.get('#user_city_id').select('KOTA ADM. JAKARTA SELATAN').should('have.value', '3174')
        cy.get('#user_subdistrict_id').select('Tebet').should('have.value', '317401')
        cy.get('#user_address').clear().type('jln.in aja bro')
        cy.get('.custom-control').click()
        cy.get('#edit').click()
        cy.get('#generalModal > .modal-dialog > .modal-content > .modal-footer > .btn').click()
        cy.go('back')
    })
})