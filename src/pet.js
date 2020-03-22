class Pet {
    constructor(name) {
        this.name = name || "An unloved pet";
        this.age = 0;
        this.hunger = 0;
        this.fitness = 10;
    }

    get isAlive() {
        const MAX_AGE = 30;
        const MAX_HUNGER = 10;
        const MIN_FITNESS = 0;

        return this.age < MAX_AGE && this.hunger < MAX_HUNGER && this.fitness > MIN_FITNESS;
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

        if(!this.isAlive){
            throw new Error('Your pet is no longer alive :(');
        }

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

    checkUp() {
        const FITNESS_THRESHOLD = 3;
        const HUNGER_THRESHOLD = 5;
        const DEAD_MESSAGE = 'Your pet is no longer alive :(';

        if(!this.isAlive) { return DEAD_MESSAGE }
        
        if (this.fitness <= FITNESS_THRESHOLD && this.hunger >= HUNGER_THRESHOLD) {
            return "I need a walk AND I am hungry";
        }


        if (this.hunger >= HUNGER_THRESHOLD) {
            return "I am hungry";
        }

        if (this.fitness <= FITNESS_THRESHOLD) {
            return "I need a walk";
        }
    }
}

module.exports = Pet;