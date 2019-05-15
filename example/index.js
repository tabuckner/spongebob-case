const SC = require('../dist/spongebob-case.umd');
const simpleTranslator = new SC.SpongebobCase(new SC.SimpleAlternate());
const alternatingTranslator = new SC.SpongebobCase(new SC.AlternateIgnoreSpaces());

const testStr = 'This is a testing string.'
console.log(simpleTranslator.translate(testStr));
console.log(alternatingTranslator.translate(testStr));
