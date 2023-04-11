import { Age } from './Age'
import { Email } from './Email'
import { Name } from './Name'

export class User {

    private name: Name
    private age: Age
    private email: Email

    constructor( name: Name, age: Age, email: Email ) {
        this.name = name
        this.age = age
        this.email = email
    }

}