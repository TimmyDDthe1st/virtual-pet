const Pet = require('../src/pet');

describe('pet', () => {
    it('should return a new pet with a name', () => {
        expect(new Pet()).toBeInstanceOf(Object);
        expect(new Pet().name).toBe("An unloved pet");
        expect(new Pet('Manny').name).toBe("Manny");
    }),

    it('should return a new pet with an age', () => {
        const myPet = new Pet();
        expect(myPet.age).toBe(0);
        myPet.growUp();
        myPet.growUp();
        expect(myPet.age).toBe(2);
    })
})