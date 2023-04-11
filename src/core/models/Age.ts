
export class Age {

    private age: number

    private constructor(age: number) {
        this.age = age
    }

    static createNewAge(age: number): Age {

        const ageIsLessThanZero = age <= 0
        const ageIsNotInterger = !Number.isInteger(age)

        if (ageIsNotInterger) { throw new Error('Age have to be a whole number') }
        if (ageIsLessThanZero) { throw new Error('Age have to be greater than zero') }

        return new Age(age)

    }

    getAge(): number {
        return this.age
    }

}
