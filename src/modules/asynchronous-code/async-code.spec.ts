import { Observable, Subject, of } from "rxjs";

class Service {

    fetchData(): Promise<string> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('peanut butter');
            }, 1000);
        });
    }

    fetchDataThrowError(): Observable<string> {
        throw new Error('error');
    }

    fetchDataError(): Promise<string> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject('error');
            }, 1000);
        });
    }
}

describe('Testing Asynchronous Code', () => {
    let service: Service;

    beforeEach(() => {
        service = new Service();
    });

    test('test promises', () => {
        service.fetchData().then(data => {
            expect(data).toBe('peanut butter');
        });
    });

    test('test async/await ', async () => {
        const data = await service.fetchData();
        expect(data).toBe('peanut butter');
    });

    test('using resolves toBe', async () => {
        await expect(service.fetchData()).resolves.toBe('peanut butter');
    });

    test('using resolve toMatch', async () => {
        await expect(service.fetchDataError()).rejects.toMatch('error');
    });

    test('test fetch fails with an error', async () => {
        expect.assertions(1);
        try {
            await service.fetchDataThrowError();
        } catch (error) {
            expect(error.message).toMatch('error');
        }
    });

})

