describe('Test Suit', function(){
    it('Tambah-Facilitator', function() {
        cy.visit('https://admin.pkh.dojobox.id/')
            cy.contains('Welcome Back!').should('have.text', 'Welcome Back!')    //Assertions
        cy.get('#input-email').type('e@dojobox.id').should('exist')
        cy.get('#input-password').type('admin{enter}')
            cy.contains('Facilitator').should('exist')      //Assertions
        cy.get('.d-flex > .btn').click()
            cy.contains('Tambah Data Fasilitator').should('exist')
        cy.get('#user_fullname').type('Facilitator-test')
        cy.get('#user_email').type('te22st@gmail.com')
        cy.get('#user_password').type('admin123')
        cy.get('#user_province_id').select('SUMATERA BARAT').should('have.value', '13')
        cy.get('#user_city_id').select('KAB. TANAH DATAR').should('have.value', '1304')
        cy.get('#user_subdistrict_id').select('Pariangan').should('have.value', '130409')
        cy.get('#user_address').type('jln.in aja')
        cy.get('.custom-control').click()
        cy.get('#add').click()
        cy.get('#generalModal > .modal-dialog > .modal-content > .modal-footer > .btn').click()
        cy.go('back')
    })
})