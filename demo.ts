abstract class Person {
  abstract skills()
}

class person1 extends Person {
  skills() {
    console.log('person1')
  }
}
class person2 extends Person {
  skills() {
    console.log('person2')
  }
}
class person3 extends Person {
  skills() {
    console.log('person3')
  }
}
const person = new person1()
person.skills()
