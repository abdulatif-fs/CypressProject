// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import JsonSchema from 'chai-json-schema';
chai.use(JsonSchema)
import validateSchema from'cypress-ajv-schema-validator';
Cypress.Commands.add('getToken', (username, password) => {
    cy.request({
        url: "https://dummyjson.com/auth/login",
        method: "post",
        body: {
            "username": `${username}`,
            "password": `${password}`
        }
    }).then((response) => {
        return response.body.accessToken
    })
});

Cypress.Commands.add('getResponse', (route, method) => {
    cy.request({
        url: `https://reqres.in${route}`,
        method: `${method}`
    }).then((res) => {
        return res
    })
})