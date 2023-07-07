class Purchase{
    getFixureData(){
        return   cy.fixture('Model').then((Model) => {
            cy.get('#inputName').type(Model.userName)
            cy.get('#address').type(Model.address)
            cy.get('#city').type(Model.city)
            cy.get('#state').type(Model.state)
            cy.get('#zipCode').type(Model.zipCode)
            cy.get('#cardType').select(Model.cardType)
            cy.get('#creditCardNumber').type(Model.creditCardNumber)
            cy.get('#creditCardMonth').type(Model.month)
            cy.get('#creditCardYear').type(Model.year)
            cy.get('#nameOnCard').type(Model.nameOnCard)
        
          })
    }
}

export default Purchase