// Singleton && object literals
const mySym = Symbol("key1")
const JSUser = {
    name: "Aleyar",
    "full name": "Aleyar Maaz",
    [mySym]: "mykey1",
    age: 25,
    email: "Aleyar@gmail.com",
    location: "kasur",
    isLoggedIn: false,
    LastLoginDay: ["monday", "tuesday"],
}
console.log(JSUser.email);
console.log(JSUser["full name"]);
console.log(JSUser[mySym]);
console.log(JSUser['isLoggedIn']);
console.log(JSUser["email"]);
JSUser.email = "Maaz@gmail.com";
console.log(JSUser["email"]);
// Object.freeze(JSUser)
// JSUser.email = "MaazAleyar@gmail.com";
// console.log(JSUser["email"]);
JSUser.greeting = function () {
    console.log("hello js user! ");
}
JSUser.greeting();
JSUser.greetingtwo = function () {
    console.log(`hellow js user! ${this.name}`);
}
JSUser.greetingtwo()


///////////// singleton /////////
const tinderUser = {}
tinderUser.name = "aleyar"
tinderUser.email = "123@eman"
tinderUser.isLoggedIn = true
console.log(tinderUser);

const regularUser = {
    email: "aleyar@gmail.com",
    fullName: {
        userFullName: {
            firstName: "aleyar",
            lastName: "maaz",
        }
    }
}

