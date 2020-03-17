const Pet = require('../src/pet');

describe('pet', () => {
    it('should return the pets name', () => {
        expect(new Pet()).toBeInstanceOf(Object);
    })
})