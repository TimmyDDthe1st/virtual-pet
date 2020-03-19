const Pet = require('../src/pet');

let testPet;

beforeEach(() => {
    testPet = new Pet();
  });

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
        testPet.growUp();
        expect(testPet.age).toBe(1);
        testPet.growUp();
        testPet.growUp();
        testPet.growUp();
        expect(testPet.age).toBe(4);
    })

    it('should make the pet hunger increase', () => {
        testPet.growUp();
        expect(testPet.hunger).toBe(5);
        testPet.growUp();
        testPet.growUp();
        testPet.growUp();
        expect(testPet.hunger).toBe(20);
    })

    it('should make the pet fitness decrease', () => {
        testPet.growUp();
        expect(testPet.fitness).toBe(7);
        testPet.growUp();
        testPet.growUp();
        expect(testPet.fitness).toBe(1);
    })
})

describe('walk', () => {
    it('should increase fitness by 4', () => {
        testPet.growUp();
        testPet.growUp();
        testPet.walk();
        expect(testPet.fitness).toBe(8);
    })

    it('should have a max health of 10', () => {
        testPet.walk();
        expect(testPet.fitness).toBe(10);
        testPet.growUp();
        testPet.walk();
        expect(testPet.fitness).toBe(10);
        testPet.growUp();
        testPet.growUp();
        testPet.walk();
        expect(testPet.fitness).toBe(8);
    })
})

describe('feed', () => {
    it('should decrease hunger by 3', () => {
        testPet.growUp();
        testPet.feed();
        expect(testPet.hunger).toBe(2);
    })

    it('should have a minimum hunger of 0', () => {
        testPet.growUp();
        testPet.feed();
        testPet.feed();
        expect(testPet.hunger).toBe(0);
        testPet.feed();
        testPet.feed();
        testPet.feed();
        testPet.feed();
        expect(testPet.hunger).toBe(0);
    })
})

describe('checkup', () => {
    const hungerTestValue = 6;
    const fitnessTestValue = 2;

    it('should return "I need a walk", when fitness < 3', () => {
        testPet.fitness = fitnessTestValue;
        expect(testPet.checkUp()).toBe('I need a walk');
    })

    it('should return "I am hungry", when hunger >= 5', () => {
        testPet.hunger = hungerTestValue;
        expect(testPet.checkUp()).toBe('I am hungry');
    })

    it('should return "I am hungry AND I need a walk", when hunger >= 5 AND fitness <= 3', () => {
        testPet.hunger = 6;
        testPet.fitness = 2;
        expect(testPet.checkUp()).toBe('I need a walk AND I am hungry');
    })
})

describe('isalive', () => {
    it('returns true when age < 30 hunger < 10 & fitness > 0', () => {
        expect(testPet.isAlive).toBe(true);
    })

    it('returns false when age > 30 hunger === 10 & fitness === 0', () => {
        expect(testPet.isAlive).toBe(true);
    })
})