import { SpongebobCase, SimpleAlternate, AlternateIgnoreSpaces } from '../dist/spongebob-case.umd';
import { SCTranslator } from '../dist/types';

export class MyClass {
  private simpleTranslator: SCTranslator;
  private alternatingTranslator: SCTranslator;

  constructor() {
    this.simpleTranslator = new SpongebobCase(new SimpleAlternate());
    this.alternatingTranslator = new SpongebobCase(new AlternateIgnoreSpaces());
  }

  public translateA(str: string): string {
    return this.simpleTranslator.translate(str);
  }

  public translateB(str: string): string {
    return this.alternatingTranslator.translate(str);
  }
}
