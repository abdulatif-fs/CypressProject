describe('Sauce Demo Login', () => {
    beforeEach(() => {
      // Visit the website before each test
      cy.visit('https://saucedemo.com/v1/')
    })
  
    it('should login successfully with valid credentials', () => {
      // Type username
      cy.get('[data-test="username"]').type('standard_user')
      
      // Type password
      cy.get('[data-test="password"]').type('secret_sauce')
      
      // Click login button
      cy.get('[id="login-button"]').click()
      
      // Verify successful login by checking if we're on the inventory page
      cy.url().should('include', '/inventory.html')
      
      // Verify the shopping cart is visible
      cy.get('.shopping_cart_link').should('be.visible')
    })
    it('- should raise error in login with wrong password', () => {
      cy.get('[data-test="username"]').type('standard_user')
      
      // Type password
      cy.get('[data-test="password"]').type('secret_sauc')
      
      // Click login button
      cy.get('[id="login-button"]').click()
  
      let err = cy.get('[data-test="error"]')
      err.should('be.visible')
      err.should('contain','Username and password do not match any user in this service')
      
    })
    it.skip("should use Excel data to perform login tests", () => {
      cy.readExcelFile("testData.xlsx").then((data) => {
        data.forEach((row) => {
          cy.get('[data-test="username"]').type(row.username);
          cy.get('[data-test="password"]').type(row.password);
          cy.get('[id="login-button"]').click();
  
          if (row.expected === "success") {
            cy.url().should('include', '/inventory.html')
          } else {
            let err = cy.get('[data-test="error"]')
            err.should('be.visible')
            err.should('contain','Username and password do not match any user in this service')
          }
        });
      });
    });
    
  
  }) 