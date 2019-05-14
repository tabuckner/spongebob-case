import { BaseTranslator } from "../models/translator.abstract";
import { TranslatorStrategy } from "../models/translator-strategy.interface";

/**
 * Concrete Strategy for Translations.
 */
export class SimpleAlternate extends BaseTranslator implements TranslatorStrategy {

  public translate(str: string): string {
    this.validateInput(str);

    const returnArr = [];
    const chars = this.getChars(str);

    for (let i = 0; i < chars.length; i++) {
      let char = i % 2 === 0 ? chars[i].toLowerCase() : chars[i].toUpperCase();
      returnArr.push(char);
    }

    return returnArr.join('');
  }

}
