import SpongebobCase from '../src/spongebob-case';
import { SimpleAlternate } from '../src/strategies';

/**
 * SpongeBob Case
 */
describe("SpongeBob Case", () => {
  it("works if true is truthy", () => {
    expect(true).toBeTruthy()
  })

  it("SpongebobCase is instantiable", () => {
    expect(new SpongebobCase(new SimpleAlternate())).toBeInstanceOf(SpongebobCase)
  })

  it('Sets the strategy on instantiation', () => {
    const instance = new SpongebobCase(new SimpleAlternate());
    expect(instance['strategy']).toBeInstanceOf(SimpleAlternate);
  })
})
