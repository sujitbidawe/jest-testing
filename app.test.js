var filterArray = require('./app');

describe('filterArray', () => {
    it('will return the null if array is null', () => {
        expect(filterArray(null)).toBeNull();
    });

    it('will return the same array if numbers are less than 100', () => {
        var inputArray = [1, 2, 3, 4];
        var results = filterArray(inputArray);
        expect(results.length).toEqual(inputArray.length);
        inputArray.forEach((element, index) => {
            expect(results[index]).toEqual(inputArray[index]);
        });
    });

    it('will return the number 100 for any number that is more than 100', () => {
        var inputArray = [50, 75, 100, 125];
        var results = filterArray(inputArray);
        expect(results).not.toContain(125);
    });
})