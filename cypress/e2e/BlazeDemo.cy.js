import FlightsDetails from "../Pages/FlightsDetails"
import HomePage from "../Pages/HomePage"
import Purchase from "../Pages/Purchase"

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

beforeEach(() => {
  cy.visit('/')
})

const homePageObject = new HomePage()
const FlightsDetailsObject = new FlightsDetails()
const purchaseObject = new Purchase

it('should text destination of the week! The Beach! be clickable', () => {
  homePageObject.clickurlText()
})

it('hover on link check destination of the week! The Beach!', () => {

  homePageObject.hoverURL()
})

it('select departure city', () => {
  homePageObject.selectDepratueCity()
})

it('select destination city', () => {
  homePageObject.selectDestinationCity()
})

it('find flights button is clickable', () => {
  homePageObject.selectDepratueCity()
  homePageObject.selectDestinationCity()
  homePageObject.clickOnFindFlightsButton()
})

it('hover on find flights button', () => {
  homePageObject.hoverFindFlights()
})

it('select lowest price flight', () => {
  homePageObject.selectDepratueCity()
  homePageObject.selectDestinationCity()
  homePageObject.clickOnFindFlightsButton()
  FlightsDetailsObject.getLowestPrice()
  //FlightsDetailsObject.lowestPrice()
})

it.only('should complete purchase with valid data', () => {
  homePageObject.selectDepratueCity()
  homePageObject.selectDestinationCity()
  homePageObject.clickOnFindFlightsButton()
  FlightsDetailsObject.getLowestPrice()
  purchaseObject.getFixureData()
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
    cy.get('#creditCardYear').type(Model.iyear)
    cy.get('#nameOnCard').type(Model.inameOnCard)

  })

  cy.get('#rememberMe').check()
  cy.contains('Purchase Flight').click()

})