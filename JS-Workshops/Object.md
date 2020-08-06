
#### JavaScript Workshop  OOP - Part 2
![Alt Text](https://media.giphy.com/media/1C8bHHJturSx2/giphy.gif)

👉 The core idea in object-oriented programming is to divide programs into smaller pieces and make each piece responsible for managing its own state.
### JavaScript Objects 
Like many other languages, JavaScript involves programming objects, so we can say it's an object-oriented language. It provides a number of predefined objects while also letting you create your own.
👉 Objects in JavaScript are collections of <strong> key/value pairs</strong>. The values can consist of properties and methods, and may contain all other JavaScript data types, such as strings, numbers, and Booleans.

👉 All objects in JavaScript descend from the parent Object constructor. Object has many useful built-in methods we can use and access to make working with individual objects straightforward. Unlike Array prototype methods like ` sort() `and  `reverse()` that are used on the array instance, 🤔 Object methods are used directly on the <strong> Object constructor </strong>, and use <strong> the object instance as a parameter </strong>. This is known as a <strong> static method </strong>.

### Creating an object 🤔
Here is the JavaScript representation of a  pen 👇

```js
let pen  🖊 = {
    type: "ballpoint",
    color: "blue",
    brand: "Bic"
};
```

<strong> 👉 Create a new object in JavaScript by setting its properties within a pair of curly braces:  {...}; </strong>

The above code defines a variable named pen whose value is an object: you can therefore say `pen` is an object.  This object has<strong> three properties: type, color , and brand </strong>. Each property has a name and a value and is separated by a comma , (except the last one).

### Getting a value 🤔 
👉 After creating the object, you can access the value of its properties using dot notation such as myObject.myProperty . 

```js
console.log(pen.type); // will be "ballpoint"
console.log(pen.color); // will be "blue"
console.log(pen.brand); // will be "Bic"
```

👉 Once you know how to access properties, you can start combining them with other elements, like strings as part of a sentence.

```js

let pen = {
    type: "ballpoint",
    color: "blue",
    brand: "Bic"
};

console.log("My pen is a " + pen.color + " " + pen.brand + " " + pen.type + " pen.");
```

### Modifying objects 🤔
👉 Once an object is created, you can change the values of its properties with the `syntaxmyObject.myProperty = newValue `.
```js
let pen = {
    type: "ballpoint",
    color: "blue",
    brand: "Bic"
};

console.log("The pen's a " + pen.color + " " + pen.brand + " " + pen.type + " pen.");

pen.color = "red"; // modify the pen color property

console.log("The pen's a " + pen.color + " " + pen.brand + " " + pen.type + " pen.");

```
👉 <strong> JavaScript even offers the ability to dynamically add new properties to an already created object.</strong>

```js
let pen = {
    type: "ballpoint",
    color: "blue",
    brand: "Bic"
};

console.log("My pen is a " + pen.color + " " + pen.brand + " " + pen.type + " pen.");

pen.price = "2.5"; // set the pen price property

console.log("My pen costs " + pen.price);

```

### Let's have a look at another object - cake
🤔 Pens are fine, but cake is cooler. Let's create a cake in JavaScript that has several properties:

flavor, like vanilla, chocolate, etc.

price in dollars

layers (1, 2, 3...8?)

![Alt Text](https://media.giphy.com/media/9u8GF7MuhdvS8/giphy.gif)

### How to create the cake? 🤔 🍰 

```js
let cake = {
    flavor: "strawberry",
    layers: 2,
    price: "$10",
    occasion: "birthday",
}
```
<strong> You can assign numbers, strings, and even other objects to properties! </strong>

### But what will happen if you want to create more complicated cake? 🤔
```js
let cake  🍰 = {
    flavor: "strawberry",
    levels: 2,
    price: "‎€10",
    occasion: "birthday",
};

console.log("The " + cake.occasion 
+ " cake has a " + cake.flavor + " flavor, " 
+ cake.levels + " layers, and costs " 
+ cake.price + ".");

// The cake is actually for a wedding!
cake.occasion = "wedding";

// Its number of layers and price both go up.
cake.levels = cake.levels + 8;
cake.price = "‎€60";

console.log("The " + cake.occasion 
+ " cake has a " + cake.flavor 
+ " flavor, " + cake.levels 
+ " layers, and costs " + cake.price + ".");

```

👉 <strong> Add the code  above to your JavaScript file and open it in your browser to see the result in the JavaScript console. </strong>

The expected output: 
```js
// The birthday cake has a strawberry flavor, 2 layers, and costs €10. 
// The wedding cake has a strawberry flavour , 10 layers and costs €60.
```
### Methods on objects in JS 🤔

👉 <strong> JavaScript methods are actions that can be performed on objects. </strong>

👉<strong>   A JavaScript method is a property containing a function definition. </strong>
👉 So Methods are nothing more than properties that hold function values
👉 In the above code, we had to write lengthy console.log statements each time to show the cake description. There's a cleaner way to accomplish this.


| Property  | Value                                                     |
| --------- | :-------------------------------------------------------- |
| firstName | Anna                                                      |
| lastName  | age                                                       |
| age       | 20                                                        |
| eyeColor  | brown                                                     |
| fullName  | function() {return this.firstName + " " + this.lastName;} |
| flavour   | vanilla                                                   |
#### ❗️  Methods are functions stored as object properties.
### Adding a method to an Object 

Let's describe the cake object:
```js

// Describe a cake
function describe(cake) {
    let description = "The " 
    + cake.occasion
     + " cake has a " 
     + cake.flavor + " flavor, " 
     + cake.levels + " layers, and costs " 
     + cake.price + ".";
    return description;
}

console.log(describe(cake));

```
<strong> 👉 The function `describe() ` takes an object as a parameter. We pass it the cake, and it accesses that object's properties and prints them out in that sentence. </strong>

👉 Now for an alternative approach: creating a describe property that houses a method. 
```js
let cake = {
    flavor: "strawberry",
    levels: 2,
    price: "€10",
    occasion: "birthday",

    // Describe the cake
    describe: function () {
        let description = "The " + this.occasion 
        + " cake has a " + this.flavor + " flavor, " 
        + this.levels + " layers, and costs " 
        + this.price + ".";
        return description;
    }
};

console.log(cake.describe());

// The cake is actually for a wedding!
cake.occasion = "wedding";

// Its number of layers and price both go up.
cake.levels = cake.levels + 8;
cake.price = "€60";

console.log(cake.describe());
```
👉 Now our object has a new property available to it, describe. The value of this property is a function that returns a text description of the cake.

👉 A property whose value is a function is called a method. 

👉 ❗️<strong> Remember the parentheses, even if empty, when calling a method! </strong>

### The keyword `this ` 🤔
👉 Now look at the body of the ` describe() ` method on our <strong> cake </strong>object. You see a new word: this. This is automatically set by JavaScript inside a method and represents <strong> 🤔the object on which the method was called.</strong>

##### Let's see how to work with the object and go a bit far and add some more pastries, as well as a "type" property to distinguish between multiple types of pastries.:

#### Do you like muffins? Let's cook one 🤔 

![Alt Text](https://media.giphy.com/media/l2Je57nk3Upb2namY/giphy.gif)
```js

let muffin = {
    type: "muffin",
    flavor: "blueberry",
    levels: 1,
    price: "€1,50",
    occasion: "breakfast",

    // Describe the pastry
    describe: function () {
        let description = "The " + this.type + " is a " + this.occasion + " pastry, has a " + this.flavor + " flavor, " + this.levels + " layers, and costs " + this.price + ".";
        return description;
    }
};

```

⚠️ 👉 Notice that the cake code and muffin code are very similar. It'd make more sense for us to create a sort of pastry factory or bakery to create code for individual pastries, no?

### Objects and prototypes in JavaScript 🤔

<strong> 👉 In addition to its special properties, every JavaScript object has an internal property called prototype . This is a link (known as reference ) to another object. When trying to access a property that does not exist in an object, JavaScript tries to find this property in the prototype of this object. </strong>

```js

let anObject = {
    a: 2
};

// Create anotherObject using anObject as a prototype
let anotherObject = Object.create(anObject);

console.log(anotherObject.a); // will show 2

```

👉 In this example, the JavaScript statement `Object.create() `is used to create the ` objectanotherObject `  based on the prototype object  ` anObject `. 

If the prototype of an object does not have a desired property, then research continues in its own own prototype until we get to the end of prototype chain. If the property was found in objects, access returns the value undefined.
```js
let anObject = {
    a: 2
};

// Create anotherObject using anObject as a prototype
let anotherObject = Object.create(anObject);

console.log(anotherObject.a); // will be 2
console.log(anotherObject.b); // will be undefined
```

👉 This type of relationship between JavaScript objects is called delegation: an object delegates part of its operation to its prototype.

 #### Cake prototype

 ### Creating characters
 Type manually the following code in your cake.js file in your code editor. 

```js
 let Pastry = {
    type: "",
    flavor: "",
    levels: 0,
    price: "",
    occasion: "",

    // Describe the pastry
    describe: function () {
        let description = "The " + this.type 
        + " is a " 
        + this.occasion + " pastry, has a " 
        + this.flavor + " flavor, " 
        + this.levels 
        + " layer(s), and costs "
         + this.price + ".";
        return description;
    }
};

let muffin = Object.create(Pastry);
muffin.type = "muffin";
muffin.flavor = "blueberry";
muffin.levels = 1;
muffin.price = "€1.50";
muffin.occasion = "breakfast";

let cake = Object.create(Pastry);
cake.type = "cake";
cake.flavor = "vanilla";
cake.levels = 3;
cake.price = "€20";
cake.occasion = "birthday";

console.log(muffin.describe());
console.log(cake.describe());

```
The output is as:

```js
// The muffin is a breakfast pastry, has a blueberry flavour, 1 layer, and costs €1.50.   

// The cake is a birthday pastry, has a vanilla flavour, 3 layers, and costs €20.

```

👉 <strong> we created an object named `Pastry `, which brings together the properties common to all the characters. The cake  and muffin  are created via  Pastry  as a prototype, which delegates its features to them. </strong>

ℹ️ 👉 The base object (here, ` Pastry ` ) often begins with a capital letter, but this is not an obligation.

### Now is time to Initialize our pastry objects
👉 The process of creating a `Pastry` is a little repetitive: for each character, you must successively give a value to each of its properties. You can do better by creating an initialization function.

```js
let Pastry = {
    // initialize the pastry
    init: function (type, flavor, levels, price, occasion) {
        this.type = type;
        this.flavor = flavor;
        this.levels = levels;
        this.price = price;
        this.occasion = occasion;
    },

    // Describe the pastry
    describe: function () {
        let description = "The " + this.type 
        + " is a " + this.occasion 
        + " pastry, has a " + this.flavor 
        + " flavor, " + this.levels 
        + " layer(s), and costs " 
        + this.price + ".";
        return description;
    }
};

let muffin = Object.create(Pastry);
muffin.init("muffin", "blueberry", 1, "€1.50", "breakfast");

lrt cake 🍰 = Object.create(Pastry);
cake.init("cake", "vanilla", 3, "€20", "birthday");

console.log(muffin.describe());
console.log(cake.describe());

```
🍰 👉 The <strong> method  `init()` </strong>takes the initial property values of the pastry as parameters. The pastry creation code is therefore reduced to only 2 steps:

👉 The actual creation, with the  `Pastry ` object as a prototype,

The initialization of its properties, using the function `init() ` on the `Pastry `
 Object.

 ### 👉 Time to bake Bake the pastries 🍰

 🤔 Pastries don't appear out of thin air, so you can introduce the idea of baking them.

```js
 let Pastry  🍰 = {
    // initialize the pastry
    init: function (type, flavor, levels, price, occasion) {
        this.type = type;
        this.flavor = flavor;
        this.levels = levels;
        this.price = price;
        this.occasion = occasion;
    },

    // Describe the pastry
    describe: function () {
        let description = "The " + this.type + " is a " + this.occasion + " pastry, has a " + this.flavor + " flavor, " + this.levels + " layer(s), and costs " + this.price + ".";
        return description;
    },
    
    bake: function() {
        let baked = "The " + this.flavor + this.type + " was placed in the oven. It's done!"
    return baked
    }
};

let muffin = Object.create(Pastry);
muffin.init("muffin", "blueberry", 1, "€1.50", "breakfast");

let cake = Object.create(Pastry);
cake.init("cake", "vanilla", 3, "€20", "birthday");

console.log(muffin.bake());
console.log(cake.bake());
console.log(muffin.describe());
console.log(cake.describe());

```


### Homework

👉 Write a method to eat the pastry using the same strategy. 

### Happy Coding 🤓
![Alt Text](https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif)

#### Extra Reading 

[More about OBJECTS](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS)

[List of reserved ES6 keywords (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Reserved_keywords_as_of_ECMAScript_2015)

### Bonus 

JS objects have the prototypical inheritance which is quite different from normal class-based inheritance. We will not explain inheritance as part of this workshop and will focus on some common methods which are available in JavaScript’s global Object constructor. Even though there are many other methods available in Object constructor, we will restrict our discussion to very frequently used ones.

### Here is the list of topics we will discuss in this article :
Shallow copy — Object.assign()

Object.create()
Object.entries()
Object.keys()
Object.values()
Object.freeze()

### a typical object initialization in JS

```js
let obj = {};
obj.name = “car”;
obj.year= 2018;
obj.speak = function(){
 return “My Name is “+this.name+” and this is year “+this.year;
}

```
Here you can see the name, year and speak properties. In JS methods are also properties with type function.

### LEARN More MORE
### built-in object methods

### `Object.create()`
The Object.create() method is used to create a new object and link it to the prototype of an existing object.

We can create a job object instance, and extend it to a more specific object.

```js

// Initialize an object with properties and methods
const job = {
    position: 'cashier',
    type: 'hourly',
    isAvailable: true,
    showDetails() {
        const accepting = this.isAvailable ? 'is accepting applications' : "is not currently accepting applications";

        console.log(`The ${this.position} position is ${this.type} and ${accepting}.`);
    }
};

// Use Object.create to pass properties
const barista = Object.create(job);

barista.position = "barista";
barista.showDetails();
```

OUTPUT
```JS
The barista position is hourly and is accepting applications.
```
The `barista` object now has one property — position — but all the other properties and methods from job are available through the prototype. Object.create() is useful for keeping code DRY by minimizing duplication.