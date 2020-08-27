Notes: 

## CONST

👉 Variables declared with the **const** maintain constant values. const declarations share some similarities with **let** declarations.

🛑 **const declarations are block scoped**

Like **let** declarations, **const** declarations can only be accessed within the **block** it was declared.

🛑 **const cannot be updated or re-declared**

👉 This means that the value of a variable declared with const remains the same within its scope. It cannot be updated or re-declared. So if we declare a variable with const, we can neither do this

```js
    const greeting = "say Hi";
    greeting = "say Hello instead"
    //error : Assignment to constant variable. 
```
nor this

```js
    const greeting = "say Hi";
    const greeting = "say Hello instead";
    //error : Identifier 'greeting' has already been declared

```


👉 Every const declaration therefore, must be initialized at the time of declaration.
This behavior is somehow different when it comes to objects declared with **const**. 
While a **const object cannot be updated**, the properties of this objects can be updated. Therefore, if we declare a const object as this

```js
const greeting = {
        message : "say Hi",
        times : 4
    }
```

while we cannot do this
```js
    const greeting = {
        words : "Hello",
        number : "five"
    }//error :  Assignment to constant variable.
```
we can do this

```js
    greeting.message = "say Hello instead";
```

This will update the value of greeting.message without returning errors.

### Hoisting of const

Just like **let**, **const** declarations are hoisted to the top but are not initialized.

🛑the differences: 👇 :

**var** declarations are globally scoped or function scoped while let and const are block scoped.

var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.

They are all hoisted to the top of their scope but while varvariables are initialized with undefined, let and const variables are not initialized.

While **var** and **let** can be declared without being initialized, 👉**const must be initialized during declaration**.