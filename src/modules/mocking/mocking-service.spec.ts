describe('mocking services', () => {
    it('should call the service method', () => {
        const mockService = {
            get: jest.fn()
        };
        mockService.get();
        expect(mockService.get).toHaveBeenCalled();
    });
    it('should call the service method with arguments', () => {
        const mockService = {
            get: jest.fn()
        };
        mockService.get('arg1', 'arg2');
        expect(mockService.get).toHaveBeenCalledWith('arg1', 'arg2');
    });
    it('should return a value', () => {
        const mockService = {
            get: jest.fn().mockReturnValue('return value')
        };
        const result = mockService.get();
        expect(result).toBe('return value');
    });
    it('should return a value once', () => {
        const mockService = {
            get: jest.fn().mockReturnValueOnce('return value')
        };
        const result = mockService.get();
        expect(result).toBe('return value');
    });
    it('should return a value twice', () => {
        const mockService = {
            get: jest.fn()
                .mockReturnValueOnce('return value 1')
                .mockReturnValueOnce('return value 2')
        };
        const result = mockService.get();
        const result2 = mockService.get();
        expect(result).toBe('return value 1');
        expect(result2).toBe('return value 2');
    });
    it('should throw an error', () => {
        const mockService = {
            get: jest.fn().mockImplementation(() => {
                throw new Error('error message');
            })
        };
        expect(() => mockService.get()).toThrow('error message');
    });
    it('should throw an error once', () => {
        const mockService = {
            get: jest.fn().mockImplementationOnce(() => {
                throw new Error('error message');
            })
        };
        expect(() => mockService.get()).toThrow('error message');
    });
    it('should throw an error twice', () => {
        const mockService = {
            get: jest.fn().mockImplementationOnce(() => {
                throw new Error('error message');
            }).mockImplementationOnce(() => {
                throw new Error('error message 2');
            })
        };
        expect(() => mockService.get()).toThrow('error message');
        expect(() => mockService.get()).toThrow('error message 2');
    });
});