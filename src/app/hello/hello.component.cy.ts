import { HelloComponent } from './hello.component'

describe('HelloComponent', () => {
  it('should mount', () => {
    cy.mount(HelloComponent)
  })
})