console.log("Hello form external JavaScript file");

// REMEMBER:  In order the file index.js to be executed we need to add script reference in the Html file,

// How to access objects in JS 

// Code Snippet Slide 4

const myCity = {
  city: "New York", // property value
  popular: true,
  country: "USA"

}
// Code snippets - Slide 5

const myCity = {
  city: "New York"
};
myCity.city = "Las vegas";

console.log(myCity);

// Code Snippet Slide 6

const myCity = {
  city: "New York",
  popular: true,
  country: "USA"
};
console.log(myCity.city);

console.log(myCity.popular);

// Code snippets - Slide 7

const myCity = {
  city: "New York"
};
myCity.city = "Las vegas"; // dot notation

console.log(myCity);

// Snippet - Slide 9

const myCity{
  city: "New York"
};

myCity.popular = true;
console.log(myCity);

myCity.country = "USA";
console.log(myCity);

// Snippet - Slide 14
// delete/ remove object properties

const myCity = {
  city: "New York",
  popular: true,
  country: "USA"
};

delete myCity.country;
console.log(myCity);

// Snippet from Slide 15
// Access Object property with bracket notation []

const myCity = {
  city: "New York"
};

myCity["popular"] = true;
console.log(myCity);

const countryPropertyName = "country";
myCity[countryPropertyName] = "USA";

console.log(myCity);

// Snippet from Slide 18.
// accessing nested properties 

const myCity = {
  city: "New York",
  info: {
    popular: true,
    country: "USA"
  }
};
console.log(myCity.info.popular);

delete myCity.info["popular"];

console.log(myCity);
