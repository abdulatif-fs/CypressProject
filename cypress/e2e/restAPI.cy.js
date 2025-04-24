import validateSchema from'cypress-ajv-schema-validator';
describe('Testing RestAPI using Cypress', () => {
    it("GET API testing Using Cypress API Plugin", () => {
        cy.request("GET", "https://dummy-json.mock.beeceptor.com/posts").should((response) => {
          expect(response.status).to.eq(200);
        });
      });
    it('validate schema', () => {
        let body = {
                    type: 'array',
                    items:{
                            type: 'object',
                            properties: {
                                userId: {type: 'number'},
                                id:     {type: 'number'},
                                tittle: {type: 'string'},
                                body:   {type: 'string'},
                                link:   {type: 'string'},
                                comment_count:  {type: 'number'}
                            }
                        }
                    }
        cy.request("GET", "https://dummy-json.mock.beeceptor.com/posts").should((response) => {
            expect(response.body).to.be.jsonSchema(body)
        });
    })
    it('dummyjson post with body request', () => {
        cy.request({
            url: "https://dummyjson.com/auth/login",
            method: "post",
            body: {
                "username": "emilys",
                "password": "emilyspass"
            }
        }).should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.username).to.eq("emilys");
        })
    })
    it('dummyjson get api with token', () => {
        
        var token = cy.getToken('emilys', 'emilyspass')
        cy.request({
            url: 'https://dummyjson.com/auth/me',
            method: 'get',
            header: {
                'Authorization': `Bearer ${token}`
            }
        }).should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.username).to.eq("emilys");
        })
    })
})