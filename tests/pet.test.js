const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });

    it('sets the name property', () => {
        const pet = new Pet('Fido');
        expect(pet.name).toEqual('Fido');
    });

    it('has an initial age of 0', () => {
        const pet = new Pet('Fido');
        expect(pet.age).toEqual(0);
    });

    it('increments the age by 1', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.age).toEqual(1);
    });

    it('has an initial hunger of 0', () => {
        const pet = new Pet('Fido');
        expect(pet.hunger).toEqual(0);
    });

    it('increments the hunger by 5', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.hunger).toEqual(5);
    });

    it('has an initial fitness of 10', () => {
        const pet = new Pet('Fido');
        expect(pet.fitness).toEqual(10);
    });

    it('decrements the fitness by 3', () => {
        const pet = new Pet('Fido');

        pet.growUp();
        expect(pet.fitness).toEqual(7);
    });
});

describe('growUp', () => {
    it('throws an error if the pet is not alive due to being too old', () => {
        const pet = new Pet('Fido');

        pet.age = 30;

        expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(');
    });

    it('throws an error if the pet is not alive due to hunger', () => {
        const pet = new Pet('Fido');

        pet.hunger = 11;

        expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(');
    });

    it('throws an error if the pet is not alive due to fitness', () => {
        const pet = new Pet('Fido');

        pet.fitness = 0;

        expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(');
    });
});

describe('walk', () => {
    it('increases fitness by 4', () => {
        const pet = new Pet('fido');

        pet.fitness = 4;
        pet.walk();

        expect(pet.fitness).toEqual(8);
    });

    it('increases fitness to a maximum of 10', () => {
        const pet = new Pet('fido');

        pet.fitness = 8;
        pet.walk();

        expect(pet.fitness).toEqual(10);
    });

    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');

        pet.fitness = 0;

        expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
    });
});

describe('feed', () => {
    it('decreases hunger by 3', () => {
        const pet = new Pet('fido');

        pet.hunger = 3;
        pet.feed();

        expect(pet.hunger).toEqual(0);
    });

    it('decreases hunger to a minimum of 0', () => {
        const pet = new Pet('fido');

        pet.hunger = 2;
        pet.feed();

        expect(pet.hunger).toEqual(0);
    });

    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');

        pet.age = 30;

        expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
    });
});

describe('checkUp', () => {
    it('returns "I am hungry AND I need a walk" if the hunger is 5 or more and the fitness is 3 or less', () => {
        const pet = new Pet('fido');

        pet.fitness = 3;
        pet.hunger = 5;
        pet.checkUp();

        expect(pet.checkUp()).toBe('I am hungry AND I need a walk');
    });

    it('returns "I need a walk" if the fitness is 3 or less', () => {
        const pet = new Pet('fido');

        pet.fitness = 3;
        pet.checkUp();

        expect(pet.checkUp()).toBe('I need a walk');
    });

    it('returns "I am hungry" if the hunger is 5 or more', () => {
        const pet = new Pet('fido');

        pet.hunger = 5;
        pet.checkUp();

        expect(pet.checkUp()).toBe('I am hungry');
    });

    it('returns "I feel great" if the hunger is less than 5 and the fitness is greater than 3', () => {
        const pet = new Pet('fido');

        pet.fitness = 4;
        pet.hunger = 4;
        pet.checkUp();

        expect(pet.checkUp()).toBe('I feel great!');
    });

    it('throws an error if the pet is not alive due to hunger', () => {
        const pet = new Pet('Fido');

        pet.hunger = 11;

        expect(() => pet.checkUp()).toThrow('Your pet is no longer alive :(');
    });

    it('throws an error if the pet is not alive due to fitness', () => {
        const pet = new Pet('Fido');

        pet.fitness = 0;

        expect(() => pet.checkUp()).toThrow('Your pet is no longer alive :(');
    });

});