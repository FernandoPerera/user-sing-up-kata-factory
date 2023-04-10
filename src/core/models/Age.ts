
export class Age {

    private age: number

    private constructor(age: number) {
        this.age = age
    }

    static createNewAge(age: number): Age {

        return new Age(age)

    }

}
