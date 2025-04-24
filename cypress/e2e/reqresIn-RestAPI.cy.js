describe('All Get API', () => {
    describe('List Users', () => {
        it('status code 200', ()=> {
            cy.request({
                url: `https://reqres.in/api/user`,
                method: `get`
            }).should((res) => {
                expect(res.status).to.eq(200)
            })
        })
        it.skip('status code with cypress.command.add', () => {
            let res = cy.getResponse('/api/user', 'get')
            expect(res.status).to.eq(200)
            // res.status dianggap tidak terdefine. 
        })
        it('validate response schema', () => {
            
        })
    })
})