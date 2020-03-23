const Pet = require('../src/pet');

let testPet;

const deadMessage = "Your pet is no longer alive :("

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
    })

    it('should make the pet hunger increase', () => {
        testPet.growUp();
        expect(testPet.hunger).toBe(5);
    })

    it('should make the pet fitness decrease', () => {
        testPet.growUp();
        expect(testPet.fitness).toBe(7);
    })

    it('should throw an exception with "Your pet is no longer alive :(", if dead', () => {
        testPet.age = 30;
        expect(() => testPet.growUp()).toThrow(deadMessage);
    })
})

describe('walk', () => {
    it('should increase fitness by 4', () => {
        testPet.fitness = 5;
        testPet.walk();
        expect(testPet.fitness).toBe(9);
    })

    it('should have a max fitness of 10', () => {
        testPet.walk();
        expect(testPet.fitness).toBe(10);
        testPet.fitness = 8;
        testPet.walk();
        expect(testPet.fitness).toBe(10);
        testPet.fitness = 4;
        testPet.walk();
        expect(testPet.fitness).toBe(8);
    })

    it('should throw an exception with "Your pet is no longer alive :(", if dead', () => {
        testPet.age = 30;
        expect(() => testPet.walk()).toThrow(deadMessage);
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

    it('should throw an exception with "Your pet is no longer alive :(", if dead', () => {
        testPet.age = 30;
        expect(() => testPet.feed()).toThrow(deadMessage)
    })
})

describe('checkup', () => {
    const HUNGER_TEST_VALUE = 6;
    const FITNESS_TEST_VALUE = 2;

    it('should return "I need a walk", when fitness < 3', () => {
        testPet.fitness = FITNESS_TEST_VALUE;
        expect(testPet.checkUp()).toBe('I need a walk');
    })

    it('should return "I am hungry", when hunger >= 5', () => {
        testPet.hunger = HUNGER_TEST_VALUE;
        expect(testPet.checkUp()).toBe('I am hungry');
    })

    it('should return "I am hungry AND I need a walk", when hunger >= 5 AND fitness <= 3', () => {
        testPet.hunger = HUNGER_TEST_VALUE;
        testPet.fitness = FITNESS_TEST_VALUE;
        expect(testPet.checkUp()).toBe('I need a walk AND I am hungry');
    })

    it('should return "Your pet is no longer alive :(" when age > 30 hunger === 10 & fitness === 0', () => {
        testPet.age = 31;
        testPet.hunger = 10;
        testPet.fitness = 0;
        expect(testPet.checkUp()).toBe(deadMessage);
    })

    it('should return "I need to poop" when poop is === 1', () => {
        testPet.poop = 1;
        expect(testPet.checkUp()).toBe('I need to poop');
    })
})

describe('isalive', () => {
    it('returns true when age < 30 hunger < 10 & fitness > 0', () => {
        expect(testPet.isAlive).toBe(true);
    })

    it('returns false when age > 30 hunger === 10 & fitness === 0', () => {
        testPet.age = 30;
        testPet.hunger = 10;
        testPet.fitness = 0;
        expect(testPet.isAlive).toBe(false);
    })
})

describe('havebaby', () => {
    it('should have an array for children', () => {
        const parent = testPet;

        expect(Array.isArray(parent.children)).toBe(true);
    })

    it('should have Fanny as the first child of the children array', () => {
        const parent = testPet;

        parent.haveBaby('Fanny');
        expect(parent.children[0].name).toBe('Fanny');
    })

    it('should be able to be fed', () => {
        const parent = testPet;

        parent.haveBaby('Fanny');
        parent.children[0].hunger = 6;
        parent.children[0].feed();
        expect(parent.children[0].hunger).toBe(3);
    })
})

describe('poop', () => {
    it('should accumulate poop', () => {
        testPet.feed();
        expect(testPet.poop).toBe(0.25);
        testPet.feed();
        testPet.feed();
        testPet.feed();
        expect(testPet.poop).toBe(1);
    })

    it('should decrease poop', () => {
        testPet.poop = 1;
        testPet.goPoop();
        expect(testPet.poop).toBe(0);
        testPet.goPoop();
        expect(testPet.poop).toBe(0);
    })
})