# SpongeBob Case

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
<!-- [![Greenkeeper badge](https://badges.greenkeeper.io/alexjoverm/typescript-library-starter.svg)](https://greenkeeper.io/) -->
<!-- [![Travis](https://img.shields.io/travis/alexjoverm/typescript-library-starter.svg)](https://travis-ci.org/alexjoverm/typescript-library-starter) -->
<!-- [![Coveralls](https://img.shields.io/coveralls/alexjoverm/typescript-library-starter.svg)](https://coveralls.io/github/alexjoverm/typescript-library-starter) -->
<!-- [![Dev Dependencies](https://david-dm.org/alexjoverm/typescript-library-starter/dev-status.svg)](https://david-dm.org/alexjoverm/typescript-library-starter?type=dev) -->
<!-- [![Donate](https://img.shields.io/badge/donate-paypal-blue.svg)](https://paypal.me/AJoverMorales) -->

An over engineered Typescript library that utilizes the OOP [Strategy Pattern](https://en.wikipedia.org/wiki/Strategy_pattern).

![](https://imgflip.com/s/meme/Mocking-Spongebob.jpg)

## Usage

#### Install
```bash
yarn add @tabuckner/spongebob-case
```

### Importing library

```javascript
const SC = require('@tabuckner/spongebob-case.umd');
const simpleTranslator = new SC.SpongebobCase(new SC.SimpleAlternate());
const alternatingTranslator = new SC.SpongebobCase(new SC.AlternateIgnoreSpaces());

const testStr = 'This is a testing string.'
console.log(simpleTranslator.translate(testStr)); // tHiS Is a tEsTiNg sTrInG.
console.log(alternatingTranslator.translate(testStr)); // ThIs Is A tEsTiNg StRiNg.
```

Or, you can import the transpiled modules from `dist/lib` in case you have a modular library:

```javascript
import something from 'mylib/dist/lib/something'
```

```javascript
import { SpongebobCase, SimpleAlternate, AlternateIgnoreSpaces } from '@tabuckner/spongebob-case.es5';

const simpleTranslator = new SpongebobCase(new SimpleAlternate());
const alternatingTranslator = new SpongebobCase(new AlternateIgnoreSpaces());

const testStr = 'This is a testing string.'
console.log(simpleTranslator.translate(testStr)); // tHiS Is a tEsTiNg sTrInG.
console.log(alternatingTranslator.translate(testStr)); // ThIs Is A tEsTiNg StRiNg.
```

```typescript
import { SpongebobCase, AlternateIgnoreSpaces, SimpleAlternate } from "@tabuckner/spongebob-case";
import { SCTranslator } from "@tabuckner/spongebob-case/dist/types/translator.interface";

export class MyClass {
  private simpleTranslator: SCTranslator;
  private alternatingTranslator: SCTranslator;

  constructor() {
    this.simpleTranslator = new SpongebobCase(new SimpleAlternate());
    this.alternatingTranslator = new SpongebobCase(new AlternateIgnoreSpaces());
  }

  public translateA(str: string): string {
    return this.simpleTranslator.translate(str); // tHiS Is a tEsTiNg sTrInG.
  }

  public translateB(str: string): string {
    return this.alternatingTranslator.translate(str); // ThIs Is A tEsTiNg StRiNg.
  }
}
```
