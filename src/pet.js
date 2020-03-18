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

    walk() {
        const WALK_FACTOR = 4;
        const MAX_FITNESS = 10;

        this.fitness = this.fitness + WALK_FACTOR;

        if (this.fitness > MAX_FITNESS) {
            this.fitness = MAX_FITNESS;
        } 
    }

    feed() {
        const FEED_FACTOR = 3;
        const MIN_HUNGER = 0;

        this.hunger = this.hunger - FEED_FACTOR;

        if (this.hunger < MIN_HUNGER) {
            this.hunger = MIN_HUNGER;
        }
    }
}

module.exports = Pet;