class Pet {
    constructor(name) {
        this.name = name || "An unloved pet";
        this.age = 0;
        this.hunger = 0;
        this.fitness = 10;
    }

    growUp() {
        const AGING_FACTOR = 1;
        const HUNGER_FACTOR = 5;
        const FITNESS_FACTOR = 3;

        this.age = this.age + AGING_FACTOR;
        this.hunger = this.hunger + HUNGER_FACTOR;
        this.fitness = this.fitness - FITNESS_FACTOR;
    }
}

module.exports = Pet;