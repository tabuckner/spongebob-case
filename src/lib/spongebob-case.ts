import { TranslatorStrategy } from '../models/translator-strategy.interface'

// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
export class SpongebobCase {
  private strategy: TranslatorStrategy

  constructor(strategy: TranslatorStrategy) {
    this.strategy = strategy
  }

  public setStrategy(strategy: TranslatorStrategy) {
    this.strategy = strategy
  }

  public translate(str: string): string {
    return this.strategy.translate(str)
  }
}
