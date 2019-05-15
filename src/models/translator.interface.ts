import { TranslatorStrategy } from './translator-strategy.interface'

export interface SCTranslator {
  setStrategy(strategy: TranslatorStrategy): void
  translate(str: string): string
}
