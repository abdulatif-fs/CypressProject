var idNewData = 0
let firstname = 'Abdul', lastname = 'fajar', totalprice = 100000, deposit= true, chekin = "2018-01-01", checkout = "2019-01-01", additionalNeeds = "kosong"
let firstname2 = 'fajar', lastname2 = 'sidiq', totalprice2 = 200000, deposit2= false, chekin2 = "2018-01-02", checkout2 = "2019-01-02", additionalNeeds2 = "kosong"

// https://restful-booker.herokuapp.com/apidoc/index.html#api-Booking-DeleteBooking
describe('POST', ()=> {
    describe('+ Create new data', ()=> {
        it('status code 201', () => {
            cy.request({
                url: `https://restful-booker.herokuapp.com/booking`,
                method: `post`,
                body: {
                    "firstname" : `${firstname}`,
                        "lastname" : `${lastname}`,
                        "totalprice" : `${totalprice}`,
                        "depositpaid" :`${deposit}`,
                        "bookingdates" : {
                            "checkin" : `${chekin}`,
                            "checkout" : `${checkout}`
                        },
                        "additionalneeds" : `${additionalNeeds}`
                 },
                // headers: {"x-api-key" : Cypress.env('x_api_key')}
            }).should((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.booking.firstname).to.eq(firstname)
                expect(response.body.booking.lastname).to.eq(lastname)
                expect(response.body.booking.totalprice).to.eq(totalprice)
                expect(response.body.booking.depositpaid).to.eq(deposit)
                expect(response.body.booking.bookingdates.checkin).to.eq(chekin)
                expect(response.body.booking.bookingdates.checkout).to.eq(checkout)
                expect(response.body.booking.additionalneeds).to.eq(additionalNeeds)
                idNewData = response.body.bookingid

            })
        })
        it('get data', () => {
            cy.request({
                url: `https://restful-booker.herokuapp.com/booking/${idNewData}`,
                method: `get`,
            }).then((response) => {
                cy.log('==================',response.body)
                expect(response.status).to.eq(200)
                expect(response.body.firstname).to.eq(firstname)
                expect(response.body.lastname).to.eq(lastname)
                expect(response.body.totalprice).to.eq(totalprice)
                expect(response.body.depositpaid).to.eq(deposit)
                expect(response.body.bookingdates.checkin).to.eq(chekin)
                expect(response.body.bookingdates.checkout).to.eq(checkout)
                expect(response.body.additionalneeds).to.eq(additionalNeeds)
            })
            })
    })
})

describe('PUT', () => {
    describe('+ Update data', () => {
        it('Success update data', async() => {
            cy.request({
                url: `https://restful-booker.herokuapp.com/booking/${idNewData}`,
                method: `put`,
                body: {
                    "firstname" : `${firstname2}`,
                        "lastname" : `${lastname2}`,
                        "totalprice" : `${totalprice2}`,
                        "depositpaid" :`${deposit2}`,
                        "bookingdates" : {
                            "checkin" : `${chekin2}`,
                            "checkout" : `${checkout2}`
                        },
                        "additionalneeds" : `${additionalNeeds2}`
                 }
            }).should((response2) => {
                expect(response2.status).to.eq(200)
                expect(response2.body.booking.firstname).to.eq(firstname2)
                expect(response2.body.booking.lastname).to.eq(lastname2)
                expect(response2.body.booking.totalprice).to.eq(totalprice2)
                expect(response2.body.booking.depositpaid).to.eq(deposit2)  
                expect(response2.body.booking.bookingdates.checkin).to.eq(chekin2)
                expect(response2.body.booking.bookingdates.checkout).to.eq(checkout2)
                expect(response2.body.booking.additionalneeds).to.eq(additionalNeeds2)
            })
        })
    })
})

describe('DELETE', () => {
    describe('+ Delete data', () => {
        it('Forbidden delete data', () => {
            cy.request({
                chromeWebSecurity: false,
                failOnStatusCode: false,
                url: `https://restful-booker.herokuapp.com/booking/${idNewData}`,
                method: `delete`,
                
            }).should((response) => {
                expect(response.status).to.eq(403)
            })
        })
    })
})

