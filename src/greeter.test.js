const Greeter = require('./greeter')

describe('Greeter', () => {
  it('can greet an anonymous individual', () => {
    const greeter = new Greeter()

    const greeting = greeter.greet()

    expect(greeting).toBe('Hello, World!')
  })

  it('can greet a specific individual', () => {
    const greeter = new Greeter()

    const greeting = greeter.greet('Tester')

    expect(greeting).toBe('Hello, Tester!')
  })
})
