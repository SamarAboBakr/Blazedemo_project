class FlightsDetails {

    getLowestPrice() {
        return cy.get('[type="submit"]').eq(2).click()
    }

    lowestPrice() {
        const arr = [472.56, 432.98, 200.98, 765.32, 233.98]
        const min = Math.min.apply(Math, arr)
        console.log(min)
    }

}

export default FlightsDetails