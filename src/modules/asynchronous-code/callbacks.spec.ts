
function fetchData(callback: (error, data) => void): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('peanut butter');
            callback(undefined, 'peanut butter');
        }, 1000);
    });
}

describe('Testing Callbacks', () => {

    // Don't do this!
    test.skip("Don't do this!", () => {
        function callback(error, data) {
            if (error) {
                throw error;
            }
            expect(data).toBe('peanut butter');
        }

        fetchData(callback);
    });

    test('Do this!', done => {
        function callback(error, data) {
            if (error) {
                done(error);
                return;
            }
            try {
                expect(data).toBe('peanut butter');
                done();
            } catch (error) {
                done(error);
            }
        }

        fetchData(callback);

    });

});