### Use Constructor Functions

**object prototypes** and how to create **new objects\* using the `Object.create()` **function\*\*.

🛑Note that:

- after we created a **new objects**, we **invoked a function** we had created called **init**.
- There's often code like this init function that you want to run in order to "set up" your new object correctly, and most object-oriented languages even have some concept of thisinit function built directly into them. In Javascript, that **built-in init** function is called a **constructor** function, and we can **invoke** it by using the special Javascript keyword **new**.

👉 To create an object using **constructor functions**, we simply write a standalone function containing the **init** functionality that we want for our object.
👉 Instead of calling it **init**, this function will have the name of our object's **"class."**

- Here's how it would look if we rewrote some of our pastry code, using a **constructor function**:

```js
var Pastry = {
  // initialize the pastry
  init: function (type, flavor, levels, price, occasion) {
    this.type = type;
    this.flavor = flavor;
    this.levels = levels;
    this.price = price;
    this.occasion = occasion;
  },
  ...
}

```

will be

```js
function Pastry(type, flavor, levels, price, occasion) {
  this.type = type;
  this.flavor = flavor;
  this.levels = levels;
  this.price = price;
  this.occasion = occasion;
}
```

👉to **instantiate** it, instead of calling it use:

```js
Object.create(Pastry);
```

and after that an **init** function

```js
new Pastry(type, flavor, levels, price, occasion);
```

Well, what about the other function that was defined by the `Pastry`object, though?

- Remember that the pastries had a `describe` function:

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
    let description =
      "The " +
      this.type +
      " is a " +
      this.occasion +
      " pastry, has a " +
      this.flavor +
      " flavor, " +
      this.levels +
      " layer(s), and costs " +
      this.price +
      ".";
    return description;
  },
};

console.log(Pastry.describe());
```

🛑 This is where the **Prototype** comes in again.

👉 All the functions, like **init** and **describe**, that we define on the Pastry object, are automatically available on all the pastries because we pass `Pastry` **in to Object.create()** when we create them.

👉 Using the **constructor function** is slightly different, though.
👉 We can't just add **properties** to the `Pastry` **constructor function**, and expect them to be present on the **instantiated instances of our class**, because **constructors** aren't the same as the **prototype** of the objects they create.

🛑 Luckily, **constructor functions** do have a special reference to the **prototype** of the **objects they create**, though, and you **can attach inheritable properties** to it.
👉 Now that we're using a **constructor** function, we'll assign our `describe`function to the `Pastry` **prototype** like this:

```js
function Pastry(type, flavor, levels, price, occasion) {
  this.type = type;
  this.flavor = flavor;
  this.levels = levels;
  this.price = price;
  this.occasion = occasion;
}

Pastry.prototype.describe = function () {
  var description = "The " + this.type + " is a " + this.occasion + "pastry, has a " + this.flavor + " flavor, " + this.levels + " layer(s), and costs " + this.price + ".";
  return description;
}
```