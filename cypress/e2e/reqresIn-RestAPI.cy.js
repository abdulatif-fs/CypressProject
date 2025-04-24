import { apiUserSchema, singleUserSchema, listResourceSchema, singleResourceSchema } from "../fixtures/schema"
describe('All Get API', () => {
    describe('List Users - /api/user', () => {
        let route = '/api/user'
        it('status code 200', ()=> {
            cy.request({
                url: `https://reqres.in${route}`,
                method: `get`
            }).should((res) => {
                expect(res.status).to.eq(200)
            })
        })
        it.skip('status code with cypress.command.add', () => {
            let res = cy.getResponse(route, 'get')
            expect(res.status).to.eq(200)
            // res.status dianggap tidak terdefine. 
        })
        it('validate response schema', () => {
            cy.request({
                url: `https://reqres.in${route}`,
                method: `get`
            }).should((res) => {
                expect(res.body).to.be.jsonSchema(apiUserSchema)
            })
        })
    })
    describe('Single User - /api/users/2', () => {
        let route = '/api/users/2'
        it('status code 200', ()=> {
            cy.request({
                url: `https://reqres.in${route}`,
                method: `get`
            }).should((res) => {
                expect(res.status).to.eq(200)
            })
        })
        it('validate response schema', () => {
            cy.request({
                url: `https://reqres.in${route}`,
                method: `get`
            }).should((res) => {
                expect(res.body).to.be.jsonSchema(singleUserSchema)
            })
        })
    })
    describe('Single User Not Found - /api/users/23', () => {
        let route = '/api/users/23'
        it('status code 404', ()=> {
            cy.request({
                url: `https://reqres.in${route}`,
                method: `get`,
                failOnStatusCode: false
            }).should((res) => {
                expect(res.status).to.eq(404)
            })
        })
    })
    describe('List <Resource> - /api/unknown', () => {
        let route = '/api/unknown'
        it('status code 200', ()=> {
            cy.request({
                url: `https://reqres.in${route}`,
                method: `get`
            }).should((res) => {
                expect(res.status).to.eq(200)
            })
        })
        it('validate response schema', () => {
            cy.request({
                url: `https://reqres.in${route}`,
                method: `get`
            }).should((res) => {
                expect(res.body).to.be.jsonSchema(listResourceSchema)
            })
        })
    })
    describe('Single Resource - /api/unknown/2', () => {
        let route = '/api/unknown/2'
        it('status code 200', ()=> {
            cy.request({
                url: `https://reqres.in${route}`,
                method: `get`
            }).should((res) => {
                expect(res.status).to.eq(200)
            })
        })
        it('validate response schema', () => {
            cy.request({
                url: `https://reqres.in${route}`,
                method: `get`
            }).should((res) => {
                expect(res.body).to.be.jsonSchema(singleResourceSchema)
            })
        })
    })
    describe('Single Resource Not Found - /api/unknown/23', () => {
        let route = '/api/unknown/23'
        it('status code 404', ()=> {
            cy.request({
                url: `https://reqres.in${route}`,
                method: `get`,
                failOnStatusCode: false
            }).should((res) => {
                expect(res.status).to.eq(404)
            })
        })
    })
})
describe('All Post API', () => {
    describe('Create - /api/users', () => {
        let route = '/api/users'
        it('status code 201', () => {
            cy.request({
                url: `https://reqres.in${route}`,
                method: `post`,
                body: {
                    "name": "morpheus",
                     "job": "leader"
                }
            }).should((response) => {
                expect(response.status).to.eq(201)
            })
        })
        it('validate schema', () => {
            cy.request({
                url: `https://reqres.in${route}`,
                method: `post`,
                body: {
                    "name": "morpheus",
                     "job": "leader"
                }
            }).should((response) => {
                expect(response.body).to.be.jsonSchema({name: {type: 'string'}, job: {type: 'string'}, updatedAt: {type: 'string'}})
            })
        })
    })
    describe('Register Successful - /api/register', () => {
        let route = '/api/register'
        it('status code 200', () => {
            cy.request({
                url: `https://reqres.in${route}`,
                method: `post`,
                body: {
                    "email": "eve.holt@reqres.in",
                    "password": "pistol"
                }
            }).should((response) => {
                expect(response.status).to.eq(200)
            })
        })
        it('validate schema', () => {
            cy.request({
                url: `https://reqres.in${route}`,
                method: `post`,
                body: {
                    "email": "eve.holt@reqres.in",
                    "password": "pistol"
                }
            }).should((response) => {
                expect(response.body).to.be.jsonSchema({id: {type: 'number'}, token: {type: 'string'}})
            })
        })
    })
    describe('Register Unsuccessful - /api/register', () => {
        let route = '/api/register'
        it('status code 200', () => {
            cy.request({
                url: `https://reqres.in${route}`,
                method: `post`,
                body: {
                    "email": "eve.holt@reqres.in"
                },
                failOnStatusCode: false
            }).should((response) => {
                expect(response.status).to.eq(400)
            })
        })
        it('validate schema', () => {
            cy.request({
                url: `https://reqres.in${route}`,
                method: `post`,
                body: {
                    "email": "eve.holt@reqres.in"
                },
                failOnStatusCode: false
            }).should((response) => {
                expect(response.body.error).to.equal('Missing password')
            })
        })
    })
    describe('Login Successful - /api/login', () => {
        let route = '/api/login'
        it('status code 200', () => {
            cy.request({
                url: `https://reqres.in${route}`,
                method: `post`,
                body: {
                    "email": "eve.holt@reqres.in",
                    "password": "cityslicka"
                }
            }).should((response) => {
                expect(response.status).to.eq(200)
            })
        })
        it('validate schema', () => {
            cy.request({
                url: `https://reqres.in${route}`,
                method: `post`,
                body: {
                    "email": "eve.holt@reqres.in",
                    "password": "cityslicka"
                }
            }).should((response) => {
                expect(response.body).to.be.jsonSchema({token: {type: 'string'}})
            })
        })
    })
    describe('Login Unsuccessful - /api/login', () => {
        let route = '/api/register'
        it('status code 200', () => {
            cy.request({
                url: `https://reqres.in${route}`,
                method: `post`,
                body: {
                    "email": "peter@klaven"
                },
                failOnStatusCode: false
            }).should((response) => {
                expect(response.status).to.eq(400)
            })
        })
        it('validate schema', () => {
            cy.request({
                url: `https://reqres.in${route}`,
                method: `post`,
                body: {
                    "email": "peter@klaven"
                },
                failOnStatusCode: false
            }).should((response) => {
                expect(response.body.error).to.equal('Missing password')
            })
        })
    })
})
describe('API PUT and DELETE', () => {
    describe('PUT <Update> - /api/users/2', () => {
        let route = '/api/users/2'
        it('status code 200', () => {
            cy.request({
                url: `https://reqres.in${route}`,
                method: `put`,
                body: {
                    "name": "morpheus",
                    "job": "zion resident"
                }
            }).should((response) => {
                expect(response.status).to.eq(200)
            })
        })
        it('validate schema', () => {
            cy.request({
                url: `https://reqres.in${route}`,
                method: `put`,
                body: {
                    "name": "morpheus",
                    "job": "zion resident"
                }
            }).should((response) => {
                expect(response.body).to.be.jsonSchema({name: {type: 'string'}, job: {type: 'string'}, updatedAt: {type: 'string'}})
            })
        })
    })
    describe('DELETE - /api/users/2', () => {
        let route = '/api/users/2'
        it('status code 200', () => {
            cy.request({
                url: `https://reqres.in${route}`,
                method: `delete`,
            }).should((response) => {
                expect(response.status).to.eq(204)
            })
        })
    })
})