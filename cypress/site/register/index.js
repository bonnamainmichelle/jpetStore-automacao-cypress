const el = require('./elements').Elements

class Register {

    registerSite(){
        cy.visit(el.page);
        cy.get(el.enterTheStore).click({force:true});
        cy.get('img',).should('be.visible');

        cy.contains('Sign In').click({force:true});
        cy.contains('Register Now').click({force:true});

        cy.get(el.userId).type('vivi')
        cy.get(el.password).type('010101AB');
        cy.get(el.repeatPassword).type('010101AB');
        cy.get(el.firstName).type('Sophia');
        cy.get(el.lastName).type('Lara');
        cy.get(el.email).type('slara@gmail.com');
        cy.get(el.phone).type('245-41-41');
        cy.get(el.address1).type('rua: Rosa, 78 - Bairro: centro');
        cy.get(el.address2).type('0000');
        cy.get(el.city).type('Santa Rosa');
        cy.get(el.state).type('RS');
        cy.get(el.zip).type('978-01-10');
        cy.get(el.country).type('Brazil');

        cy.get(el.select).select('english').should('have.value', 'english');
        cy.get(el.category).select('DOGS').should('have.value', 'DOGS');
        cy.get(el.myList).check('true').should('have.value', 'true');

        cy.get(el.saveAccount).click({force:true});
    }


     loginAddCart(){
        cy.visit(el.page);
        cy.get(el.enterTheStore).click({force:true});
        
        cy.contains('Sign In').click({force:true});

        cy.get(el.userId).clear().type('vivi' , {force:true});
        cy.get(el.password).clear().type('010101AB' ,{force:true});

        cy.contains('Login').click({force:true});

        cy.contains('Welcome Sophia!',).should('be.visible');

        cy.get(el.dogsCategory).click({force:true});
        cy.contains('Dogs',).should('be.visible');

        cy.contains('K9-BD-01').click({force:true});
        cy.contains('Add to Cart').first().click({force:true});

        cy.contains('Proceed to Checkout').click({force:true});
        cy.contains('Continue').click({force:true});
        cy.contains('Confirm').click({force:true});
        cy.contains('Thank you, your order has been submitted.',).should('be.visible');

        cy.contains('Return to Main Menu').click({force:true});
        cy.get('img',).should('be.visible');

     }

    



}

export default new Register()