class Apple {
    _weight;

    constructor(weight) {
        this._weight = weight;
    }

    get weight() {
        return this._weight;
    }

    set weight(value) {
        this._weight = value;
    }

    decrease() {
        if (this._weight > 0) {
            this._weight--
        }
    }

    isEmpty() {
        if (this._weight === 0) {
            return true
        } else {
            return false
        }
    }
}

class Human {
    _name;
    _gender;
    _weight;

    constructor(name, gender, weight) {
        this._name = name;
        this._gender = gender;
        this._weight = weight;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get gender() {
        return this._gender;
    }

    set gender(value) {
        this._gender = value;
    }

    get weight() {
        return this._weight;
    }

    set weight(value) {
        this._weight = value;
    }

    checkApple(apple) {
        return apple.isEmpty();
    }

    eat(apple) {
        this._weight += 1
        apple.decrease();
    }

    say(something) {
        alert(this._name + ' say:' + something);
    }
}