export abstract class BaseTranslator {
  protected validateInput(str: string): void {
    if (!this.inputIsValid(str)) {
      throw new Error(`${str} is not a valid input.`);
    }
  }

  protected getChars(str: string): string[] {
    return str.split('');
  }

  private inputIsValid(str: string): boolean {
    return !!(str && str.length > 0);
  }
}
