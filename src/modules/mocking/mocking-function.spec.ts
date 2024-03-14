describe('mocking functions', () => {

    it('should call the function', () => {
        const mockFunction = jest.fn();
        mockFunction();
        expect(mockFunction).toHaveBeenCalled();
    })

    it('should call the function with arguments', () => {
        const mockFunction = jest.fn();
        mockFunction('arg1', 'arg2');
        expect(mockFunction).toHaveBeenCalledWith('arg1', 'arg2');
    })

    it('should return a value', () => {
        const mockFunction = jest.fn().mockReturnValue('return value');
        const result = mockFunction();
        expect(result).toBe('return value');
    })

    it('should return a value once', () => {
        const mockFunction = jest.fn().mockReturnValueOnce('return value');
        const result = mockFunction();
        expect(result).toBe('return value');
    })

    it('should return a value twice', () => {
        const mockFunction = jest.fn()
            .mockReturnValueOnce('return value 1')
            .mockReturnValueOnce('return value 2');
        const result = mockFunction();
        const result2 = mockFunction();
        expect(result).toBe('return value 1');
        expect(result2).toBe('return value 2');
    })

    it('should throw an error', () => {
        const mockFunction = jest.fn().mockImplementation(() => {
            throw new Error('error message');
        });
        expect(() => mockFunction()).toThrow('error message');
    })

    it('should throw an error once', () => {
        const mockFunction = jest.fn().mockImplementationOnce(() => {
            throw new Error('error message');
        });
        expect(() => mockFunction()).toThrow('error message');
    })

    it('should throw an error twice', () => {
        const mockFunction = jest.fn().mockImplementationOnce(() => {
            throw new Error('error message');
        }).mockImplementationOnce(() => {
            throw new Error('error message 2');
        });
        expect(() => mockFunction()).toThrow('error message');
        expect(() => mockFunction()).toThrow('error message 2');
    })

    it('should call the function with a specific implementation', () => {
        const mockFunction = jest.fn().mockImplementation(() => 'return value');
        const result = mockFunction();
        expect(result).toBe('return value');
    })


})