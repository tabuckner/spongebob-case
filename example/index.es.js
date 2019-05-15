import { SpongebobCase, SimpleAlternate, AlternateIgnoreSpaces } from '../dist/spongebob-case.es5';

const simpleTranslator = new SpongebobCase(new SimpleAlternate());
const alternatingTranslator = new SpongebobCase(new AlternateIgnoreSpaces());

const testStr = 'This is a testing string.'
console.log(simpleTranslator.translate(testStr)); // tHiS Is a tEsTiNg sTrInG.
console.log(alternatingTranslator.translate(testStr)); // ThIs Is A tEsTiNg StRiNg.
