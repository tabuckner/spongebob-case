import { BaseTranslator } from '../models/translator.abstract'
import { TranslatorStrategy } from '../models/translator-strategy.interface'

/**
 * Concrete Strategy for Translations.
 */
export class AlternateIgnoreSpaces extends BaseTranslator implements TranslatorStrategy {
  private lastWasCapital = false

  public translate(str: string): string {
    this.validateInput(str)

    const returnArr = []
    const chars = this.getChars(str)

    for (let char of chars) {
      if (this.isAlphaChar(char)) {
        if (this.lastWasCapital) {
          returnArr.push(char.toLowerCase())
          this.lastWasCapital = false
        } else {
          returnArr.push(char.toUpperCase())
          this.lastWasCapital = true
        }
      } else {
        returnArr.push(char)
      }
    }

    return returnArr.join('')
  }

  private isAlphaChar(char: string): boolean {
    const regex = /[A-Za-z]/
    return regex.test(char)
  }
}
