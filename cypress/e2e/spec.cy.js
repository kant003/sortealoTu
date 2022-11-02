
describe('empty spec', () => {
  beforeEach( () => {
    cy.visit('http://127.0.0.1:5173/')
  })
  it('passes', () => {
    //cy.visit('http://127.0.0.1:5173/')
    cy.get('input').type('un iphone')
    cy.get('textarea').type('Ivana\nJuana\nAna')
    cy.get('button').click()
    cy.get('#winner').contains(/Enhorabuena (Ana|Juana|Ivana) has ganado un iphone/)
  })

  it('test width no participants', () => {
    //cy.visit('http://127.0.0.1:5173/')
    cy.get('input').type('un iphone')
    cy.get('button').click()
    cy.get('#winner').contains('No hay participantes')
  })
})

