Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

beforeEach(() => {
  cy.visit('/')
})

it('should text destination of the week! The Beach! be clickable', () => {
  cy.contains('destination of the week! The Beach!').click()
})

it('select departure and destination', () => {
  cy.get('[name="fromPort"]').select(2)
  cy.get('[name="toPort"]').select(3)
  cy.get('.btn.btn-primary').click()
})

it('select cheapest flight', () => {
  cy.get('[name="fromPort"]').select(2)
  cy.get('[name="toPort"]').select(3)
  cy.get('.btn.btn-primary').click()
  cy.get('[type="submit"]').eq(2).click()
})

it('should complete purchase with valid data', () => {
  cy.get('[name="fromPort"]').select(2)
  cy.get('[name="toPort"]').select(3)
  cy.get('.btn.btn-primary').click()
  cy.get('[type="submit"]').eq(2).click()
  cy.fixture('Model').then((Model) => {
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

  cy.get('#rememberMe').check()
  cy.contains('Purchase Flight').click()

})


it('should complete purchase with invalid data', () => {
  cy.get('[name="fromPort"]').select(2)
  cy.get('[name="toPort"]').select(3)
  cy.get('.btn.btn-primary').click()
  cy.get('[type="submit"]').eq(2).click()
  cy.fixture('Model').then((Model) => {
    cy.get('#inputName').type(Model.iuserName)
    cy.get('#address').type(Model.iaddress)
    cy.get('#city').type(Model.icity)
    cy.get('#state').type(Model.istate)
    cy.get('#zipCode').type(Model.izipCode)
    cy.get('#cardType').select(Model.icardType)
    cy.get('#creditCardNumber').type(Model.icreditCardNumber)
    cy.get('#creditCardMonth').type(Model.imonth)
    cy.get('#creditCardYear').type(Model.oyear)
    cy.get('#nameOnCard').type(Model.inameOnCard)

  })

  cy.get('#rememberMe').check()
  cy.contains('Purchase Flight').click()

})