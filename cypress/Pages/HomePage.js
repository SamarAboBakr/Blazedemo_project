class HomePage {
    get urlText() {
        return cy.contains('destination of the week! The Beach!')
    }

    clickurlText() {
        this.urlText.click()
    }

    hoverURL(){
        return   cy.contains('destination of the week! The Beach!').trigger('mouseover')
        ,cy.contains('destination of the week! The Beach!').trigger('mouseout')
    }

    selectDepratueCity(){
        return cy.get('[name="fromPort"]').select(2)
    }

    selectDestinationCity(){
        return cy.get('[name="toPort"]').select(3)
    }

    hoverFindFlights(){
        cy.get('.btn.btn-primary').trigger("mouseover")
        cy.get('.btn.btn-primary').trigger("mouseout")
    }

    clickOnFindFlightsButton(){
        cy.get('.btn.btn-primary').click()
    }   
}
export default HomePage