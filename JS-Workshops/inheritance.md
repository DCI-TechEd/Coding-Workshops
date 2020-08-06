### What is Inheritance

inheritance is the concept of one thing gaining the properties or behaviours of something else. To say A inherits from B, is saying that A is a type of B. A Bird inherits from Animal because a Bird is a type of Animal - it can do the same things, but a little more (or differently)!

In JavaScript, this relationship is a little complicated to specify, but bear with the syntax. You must use a special object called prototype which assigns properties to a type such as Animal. Only functions have a prototype, which is why you must create a function first:

```js
function Animal() {}; // This is the Animal *Type*
Animal.prototype.eat = function () {
    alert("All animals can eat!");
};
```

Now to create a type that inherits from Animal, you also use the prototype object, but this time the one belonging to the other type, e.g. Bird:
```js
function Bird() {}; // Declaring a Bird *Type*
Bird.prototype = new Animal(); // Birds inherit from Animal
Bird.prototype.fly = function() {
    alert("Birds are special, they can fly!");
};
```
The effect of this is that any Birds you create (called an instance of Bird) all have the properties of Animals, but they also have the additional .fly():

```js
let aBird = new Bird(); // Create an instance of the Bird Type
aBird.eat(); // It should alert, so the inheritance worked
aBird.fly(); // Important part of inheritance, Bird is also different to Animal

let anAnimal = new Animal(); // Let's check an instance of Animal now
anAnimal.eat(); // Alerts, no problem here
anAnimal.fly(); // Error will occur, since only Birds have fly() in its prototype
```

Its simple, the inheritance means: "objects/classes inherit from other objects/classes" through prototypes

for example:
```js
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}
Person.prototype.nationality = "English";
```