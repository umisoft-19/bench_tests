const syncWait = ms => {
    const end = Date.now() + ms
    while (Date.now() < end) continue
}

const select = (field, option) => {
    // Initial field in form tends to be focused, so clicking on another input
    // ensures that focusing will trigger the dropdown.
    cy.get('#title-text').click()
    cy.get(`#${field}_visible_input`)
        .focus()
        .click()
    cy.get(`#${field}_widget_opt_${option}`)
        .click()
}

module.exports = {
    select: select,
    syncWait: syncWait
}