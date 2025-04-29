import { capsulesSchema, capsuleByIdSchema, companySchema, dragonsSchema, historySchema, rocketsSchema, shipsSchema, coresSchema } from "../fixtures/graphqlschema";
import { capsulesQuery, capsuleByIdQuery, companyQuery, dragonsQuery, historyQuery, rokectsQuery, shipsQuery, coresQuery } from "../fixtures/graphqlQuery";

const method = 'post'
const url = 'https://spacex-production.up.railway.app/'

describe('GraphQL API', () => {
    describe('+ Query Capsules', () => {
        it('Check status response', () => {
            cy.request({
                method: method,
                url: url,
                body: {
                query: capsulesQuery,
                }
            }).then((res) => {
                expect(res.status).to.equal(200)
            })
        })
        it('check object schema', () => {
            cy.request({
                method: method,
                url: url,
                body: {
                query: capsulesQuery,
                }
            }).then((res) => {
                expect(res.body).to.be.jsonSchema(capsulesSchema)
            })
        })
    })
    describe('+ Query capsule by id', () => {
        it('Check status response', () => {
            cy.request({
                method: method,
                url: url,
                body: {
                query: capsuleByIdQuery,
                variables: {"id": "5e9e2c5cf359188bfb3b266b"}
                }
            }).then((res) => {
                expect(res.status).to.equal(200)
            })
        })
        it('check object schema', () => {
            cy.request({
                method: method,
                url: url,
                body: {
                query: capsuleByIdQuery,
                variables: {"id": "5e9e2c5cf359188bfb3b266b"}
                }
            }).then((res) => {
                expect(res.body).to.be.jsonSchema(capsuleByIdSchema)
            })
        })
    })
    describe('+ Query company', () => {
        it('Check status response', () => {
            cy.request({
                method: method,
                url: url,
                body: {
                query: companyQuery
                }
            }).then((res) => {
                expect(res.status).to.equal(200)
            })
        })
        it('check object schema', () => {
            cy.request({
                method: method,
                url: url,
                body: {
                query: companyQuery,
                }
            }).then((res) => {
                expect(res.body).to.be.jsonSchema(companySchema)
            })
        })
    })
    describe('+ Query dragons', () => {
        it('Check status response', () => {
            cy.request({
                method: method,
                url: url,
                body: {
                query: dragonsQuery
                }
            }).then((res) => {
                expect(res.status).to.equal(200)
            })
        })
        it('check object schema', () => {
            cy.request({
                method: method,
                url: url,
                body: {
                query: dragonsQuery,
                }
            }).then((res) => {
                expect(res.body).to.be.jsonSchema(dragonsSchema)
            })
        })
    })
    describe('+ Query History', () => {
        it('Check status response', () => {
            cy.request({
                method: method,
                url: url,
                body: {
                query: historyQuery
                }
            }).then((res) => {
                expect(res.status).to.equal(200)
            })
        })
        it('check object schema', () => {
            cy.request({
                method: method,
                url: url,
                body: {
                query: historyQuery,
                }
            }).then((res) => {
                expect(res.body).to.be.jsonSchema(historySchema)
            })
        })
    })
    describe('+ Query Rockets', () => {
        it('Check status response', () => {
            cy.request({
                method: method,
                url: url,
                body: {
                query: rokectsQuery
                }
            }).then((res) => {
                expect(res.status).to.equal(200)
            })
        })
        it('check object schema', () => {
            cy.request({
                method: method,
                url: url,
                body: {
                query: rokectsQuery,
                }
            }).then((res) => {
                expect(res.body).to.be.jsonSchema(rocketsSchema)
            })
        })
    })
    describe('+ Query Ships', () => {
        it('Check status response', () => {
            cy.request({
                method: method,
                url: url,
                body: {
                query: shipsQuery
                }
            }).then((res) => {
                expect(res.status).to.equal(200)
            })
        })
        it('check object schema', () => {
            cy.request({
                method: method,
                url: url,
                body: {
                query: shipsQuery,
                }
            }).then((res) => {
                expect(res.body).to.be.jsonSchema(shipsSchema)
            })
        })
    })
    describe('+ Query cores', () => {
        it('Check status response', () => {
            cy.request({
                method: method,
                url: url,
                body: {
                query: coresQuery
                }
            }).then((res) => {
                expect(res.status).to.equal(200)
            })
        })
        it('check object schema', () => {
            cy.request({
                method: method,
                url: url,
                body: {
                query: coresQuery,
                }
            }).then((res) => {
                expect(res.body).to.be.jsonSchema(coresSchema)
            })
        })
    })
});