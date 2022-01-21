const syncWait = (ms, callback) => {
    const end = Date.now() + ms
    while (Date.now() < end) continue
    if(callback) {
        callback()
    }
}

const select = (field, option) => {
    // Initial field in form tends to be focused, so clicking on another input
    // ensures that focusing will trigger the dropdown.
    
    cy.get('#title-text').click()
    cy.get(`#${field}_visible_input`)
        .focus()
        .click()
    if(option == 'last') {
        cy.get(`#${field}_widget_options_list li.opt`)
            .last()
            .click()
    } else if(option == 'first') {
        cy.get(`#${field}_widget_options_list li.opt`)
            .first()
            .click()
    } else {
        cy.get(`#${field}_widget_opt_${option}`)
            .click()
    } 
}

const dynamicSelect = (field, option1, option2) => {
    // Initial field in form tends to be focused, so clicking on another input
    // ensures that focusing will trigger the dropdown.
    
    cy.get('#title-text').click()
    cy.get(`#id_${field}`)
        .focus()
        .click()
    if(option1 == 'last') {
        cy.get(`#id_${field}_opt_list > div`)
            .last()
            .click()
    } else if(option1 == 'first') {
        cy.get(`#id_${field}_opt_list > div`)
            .first()
            .click()
    }
    cy.get('#title-text').click()
    cy.get(`#id_${field}`)
        .focus()
        .click()
    if(option2 == 'last') {
        cy.get(`#id_${field}_opt_list > div`)
            .last()
            .click()
    } else if(option2 == 'first') {
        cy.get(`#id_${field}_opt_list > div`)
            .first()
            .click()
    }
    // TODO select arbitrary index
}

const set_date = (field, date) => {
    // Initial field in form tends to be focused, so clicking on another input
    // ensures that focusing will trigger the dropdown.
    
    cy.get(`#div_id_${field} input`)
        .type(date)
    cy.get('#title-text').click()
}

const deleteAction = () => {
    cy.get('button .fa-trash-alt')
        .click()
}

const submit = () => {
    cy.get('#id_submit_btn')
            .click()
}

module.exports = {
    select: select,
    dynamicSelect: dynamicSelect,
    syncWait: syncWait,
    setDate: set_date,
    delete: deleteAction,
    submit: submit
}