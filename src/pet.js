class Pet {
    constructor(name) {
        this.name = name || "An unloved pet";
        this.age = 0;
    }

    growUp() {
        this.age = this.age + 1;
    }
}

module.exports = Pet;