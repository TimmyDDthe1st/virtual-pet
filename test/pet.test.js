const Pet = require('../src/pet');

describe('constructor', () => {
    it('should return a new pet with a name', () => {
        expect(new Pet()).toBeInstanceOf(Object);
        expect(new Pet().name).toBe("An unloved pet");
        expect(new Pet('Manny').name).toBe("Manny");
    })

    it('should return a new pet with an age', () => {
        expect(new Pet().age).toBe(0);
    })

    it('shold return a new pet with a hunger', () => {
        expect(new Pet().hunger).toBe(0);
    })

    it('shold return a new pet with a fitness', () => {
        expect(new Pet().fitness).toBe(10);
    })
})

describe('growUp', () => {
    it('should make the pet grow', () => {
        const testPet = new Pet();
        testPet.growUp();
        expect(testPet.age).toBe(1);
        testPet.growUp();
        testPet.growUp();
        testPet.growUp();
        expect(testPet.age).toBe(4);
    })

    it('should make the pet hunger increase', () => {
        const testPet = new Pet();
        testPet.growUp();
        expect(testPet.hunger).toBe(5);
        testPet.growUp();
        testPet.growUp();
        testPet.growUp();
        expect(testPet.hunger).toBe(20);
    })

    it('should make the pet fitness decrease', () => {
        const testPet = new Pet();
        testPet.growUp();
        expect(testPet.fitness).toBe(7);
        testPet.growUp();
        testPet.growUp();
        expect(testPet.fitness).toBe(1);
    })
})