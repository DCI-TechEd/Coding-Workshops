### Creating new objects

JavaScript has a number of predefined objects.

- In addition, you can create your own objects. 
- In JavaScript you can create an object using an **object initializer**.
  
- Alternatively, you can first create a **constructor function** and then **instantiate an object** using that **function** and the **new** operator.

#### Using object initializers

In addition to creating objects using a constructor function, you can create objects using an object initializer.

#### How can an object be initialized?

**Using a constructor function**
Alternatively, you can create an object with these two steps:

👉 Define the object type by writing a constructor function. There is a strong convention, with good reason, to use a capital initial letter.

👉 Create an instance of the object with new.

- To define an object type, create a function for the object type that specifies its name, properties, and methods.
- For example, suppose you want to create an **object type** for **cars**.
- You want this type of object to be called car, and you want it to have **properties** for `make`, `model`, and `year`.
- So, this is possible, when you write the following function:

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
```

🛑 Notice :
👉 the use of this to assign values to the object’s properties based on the values passed to the function.

Now you can create an object called `mycar` as follows:

```js
var mycar = new Car("BMW", "Dizel i", 1998);
```

👉 This statement creates `mycar` and assigns it the specified values for its properties. Then the value of `mycar.make`is the string "BMW",
`mycar.year` is the **integer** `1998`, and so on.

👉 You can create any number of **car objects** by calls to **new**.
For example:

```js
let timscar = new Car("Suzuki", "Swift", 2002);
let kerenscar = new Car("Ford", "Mondeo", 2005);
```

👉 An object can have a property that is **itself another object**.
For example, suppose you define an **object** called person as follows:

```js
function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}
```

👉 and then instantiate two **new person objects** as follows:

```js
var rand = new Person("Tim Schmidt", 26, "M");
var ken = new Person("Karin Jones", 33, "M");
```

Then, you can rewrite the definition of car to include an owner property that takes a person object, as follows:

```js
function Car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
}
```

👉 To instantiate the new objects, you then use the following:

```js
var car1 = new Car("Suzuki", "Swift", 1993, tim);
var car2 = new Car("Ford", "Mondeo", 1992, karin);
```

🛑 Notice:
👉 that instead of passing a literal string or integer value when creating the **new objects**, the above statements pass the objects `tim` and `karin` as the **arguments for the owners**.
Then if you want to find out the name of the owner of `car2`, you can access the following property:

```js
car2.owner.name;
```

👉 Note that you can always add a property to a previously defined object. For example, the statement

```js
car1.color = "black";
```

adds a property color to `car1`, and **assigns** it a value of “black.” However, this does not affect any other objects.

👉To add the new property to all objects of the same type, you have to add the property to the definition of the **car object type**.
