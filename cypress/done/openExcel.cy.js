let filePath, sheetName

describe('Open Excel', () => {
    it("should use Excel data to perform login tests", () => {
        filePath = 'cypress//fixtures//testData.xlsx'
        sheetName = 'Sheet1'
        cy.task('readDataFromExcel', {
            filePath, sheetName
        }).then((data) => {
            data.forEach((row) => {   
                cy.visit('https://saucedemo.com/')
                cy.get('[data-test="username"]').type(row.username);
                cy.get('[data-test="password"]').type(row.password);
                cy.get('[data-test="login-button"]').click();
        
                if (row.expected === "success") {
                  cy.url().should('include', '/inventory.html')
                } else {
                  let err = cy.get('[data-test="error"]')
                  err.should('be.visible')
                  err.should('contain','Username and password do not match any user in this service')
                }
            });
        });
    })
})