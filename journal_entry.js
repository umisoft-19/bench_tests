const { gzipSync } = require("zlib")

describe('Create journal entry', () => {

    
    it('fills and submits the form', () =>{
        cy.request('GET', 'http://localhost:8000/login')
            .then(() => {
                const token = cy.get('input[name="csrfmiddlewaretoken"]')
                console.log(token)
                cy.request('POST', 'http://localhost:8000/login', {
                    username:'nakamura9a',
                    password:'audacity123',
                    csrfmiddlewaretoken: token
                }).then(() =>{
                    cy.visit('http://localhost:8000/create/accounting/journalentry/', {
                        headers: { 'X-CSRFToken': token }
                    })
                })
            })
        
        
    })
})