describe('Testing with Common Matchers', () => {
    it('should check for equality', () => {
        const actual = 1 + 1;
        const expected = 2;
        expect(actual).toBe(expected);
    });

    it('should check for truthiness', () => {
        const actual = 1 + 1;
        expect(actual).toBeTruthy();
    });

    it('should check for falsiness', () => {
        const actual = 1 - 1;
        expect(actual).toBeFalsy();
    });

    it('should check for null', () => {
        const actual = null;
        expect(actual).toBeNull();
    });

    it('should check for undefined', () => {
        const actual = undefined;
        expect(actual).toBeUndefined();
    });

    it('should check for defined', () => {
        const actual = 1;
        expect(actual).toBeDefined();
    });

    it('should check for greater than', () => {
        const actual = 10;
        const expected = 5;
        expect(actual).toBeGreaterThan(expected);
    });

    it('should check for less than', () => {
        const actual = 5;
        const expected = 10;
        expect(actual).toBeLessThan(expected);
    });

    it('should check for greater than or equal to', () => {
        const actual = 10;
        const expected = 10;
        expect(actual).toBeGreaterThanOrEqual(expected);
    });

    it('should check for less than or equal to', () => {
        const actual = 10;
        const expected = 10;
        expect(actual).toBeLessThanOrEqual(expected);
    });

    it('should check for floating point equality', () => {
        const actual = 0.1 + 0.2;
        const expected = 0.3;
        expect(actual).toBeCloseTo(expected);
    });

    it('should check for string matching', () => {
        const actual = 'Hello World';
        const expected = /Hello/;
        expect(actual).toMatch(expected);
    });

    it('should check for array containing', () => {
        const actual = [1, 2, 3];
        const expected = 2;
        expect(actual).toContain(expected);
    });

    it('should check for object property existence', () => {
        const actual = { name: 'John', age: 25 };
        const expected = 'name';
        expect(actual).toHaveProperty(expected);
    });

});