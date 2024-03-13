import { ShortenPipe } from './shorten.pipe';

describe('ShortenPipe', () => {

  let shortenPipe: ShortenPipe;

  beforeAll(()=>{
    shortenPipe = new ShortenPipe();
  
  })

  it('should return text shorter or equal to limit without ellipses', () => {
    const text = 'George';
    const limit = 6;

    const result = shortenPipe.transform(text, limit)

    expect(result).toBe(text);
  })

  it('should return text longer than limit with ellipses', () => {
    const text = 'George';
    const expected = 'Georg...'
    const limit = 5;

    const result = shortenPipe.transform(text, limit);

    expect(result).toBe(expected);
  });

  let testCases = [
    { text: null, limit: 6, expectedResult: '' },
    { text: undefined, limit: 6, expectedResult: '' },
    { text: 'George', limit: 6, expectedResult: 'George' },
    { text: 'George', limit: 5, expectedResult: 'Georg...' }
  ];

  testCases.forEach(testCase => {
    it(`should return ${testCase.expectedResult} for text ${testCase.text} and limit ${testCase.limit}`, () => {

      const shortenPipe = new ShortenPipe();

      const result = shortenPipe.transform(testCase.text, testCase.limit);

      expect(result).toBe(testCase.expectedResult);
    });
  })

})
