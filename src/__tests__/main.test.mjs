import I from 'mojiscript/combinators/I'
import main from '../main'

describe('main', () => {
  const log = jest.fn(I)

  test('returns "Hello World"', () => {
    expect.assertions(1)
    const expected = 'Hello World'
    const actual = main ({ log }) ()
    return expect(actual).resolves.toBe(expected)
  })

  test('logs "Hello World"', async () => {
    expect.assertions(1)
    const expected = 'Hello World'
    const something = await main ({ log }) ()
    const actual = log.mock.calls[0][0]
    expect(actual).toBe(expected)
  })
})
