import { capsulesSchema, capsuleByIdSchema, companySchema, dragonsSchema } from "../fixtures/graphqlschema";
import { capsulesQuery, capsuleByIdQuery, companyQuery, dragonsQuery } from "../fixtures/graphqlQuery";

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
});