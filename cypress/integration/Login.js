describe('Test Case', function(){
    it('TC-LoginEmailInvalid', function() {
        cy.visit('https://admin.pkh.dojobox.id/')           
            cy.contains('Welcome Back!').should('exist')              //Assertions
        cy.get('#input-email').type('ee@dojobox.id')                  //Email Invalid
        cy.get('#input-password').type('admin{enter}')                //Password Valid
            cy.contains('Error !').should('have.text', 'Error !')     //Assertions
    }),
    it('TC-LoginPasswordInvalid', function() {
        cy.visit('https://admin.pkh.dojobox.id/')           
            cy.contains('Error !').should('exist')                      //Assertions
        cy.get('#input-email').type('e@dojobox.id')                     //Email Valid
        cy.get('#input-password').type('admin2{enter}')                 //Password Invalid
            cy.contains('Error !').should('have.text', 'Error !')       //Assertions
    }),
    it('TC-LoginInvalid', function() {
        cy.visit('https://admin.pkh.dojobox.id/')           
            cy.contains('Error !').should('exist')                      //Assertions
        cy.get('#input-email').type('ee@dojobox.id')                    //Email Valid
        cy.get('#input-password').type('admin2{enter}')                 //Password Invalid
            cy.contains('Error !').should('have.text', 'Error !')       //Assertions
    }),
    it('TC-LoginValid', function() {
        cy.visit('https://admin.pkh.dojobox.id/')
            cy.contains('Welcome Back!').should('have.text', 'Welcome Back!')    //Assertions
        cy.get('#input-email').type('e@dojobox.id').should('exist')
        cy.get('#input-password').type('admin{enter}')
            cy.contains('Facilitator').should('exist')                          //Assertions
        cy.get('.mr-2 > b').click()
        cy.get('.dropdown-menu > [href="#"]').click()
        cy.get('.modal-footer > .btn-primary').click()

    });
})