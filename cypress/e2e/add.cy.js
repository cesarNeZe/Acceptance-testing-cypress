

describe('Todo list', () => {
  beforeEach(()=>{
    cy.eyesOpen({
      appName:'todo-app-tau',
      testName: Cypress.currentTest.title,

    })
  })
  it('should store input text as value', () => {
    cy.visit('http://localhost:3000')
    cy.get("[data-testid=todo-input").type("first todo value")
    cy.get("[data-testid=todo-input").should('have.value', "first todo value")

    cy.eyesCheckWindow({
      tag: 'add input',
      target: 'region',
      matchLevel: 'Strict',
      selector:{
        type: 'name',
        selector: 'add_todo'
      }

    })
cy.eyesClose()
  })
})