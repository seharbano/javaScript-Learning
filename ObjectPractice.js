{
  const student = {
    name: "Ali",
    age: 20,
    grade: "A"
  };
  console.log(student.grade);
}
{
  const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
  };
  console.log(car.model);
  console.log(car.year);
}
{
  const book = {
    title: "JavaScript Basics",
    author: "Ahmed Khan",
    pages: 150
  };
  console.log(book.author);

}
{
  const laptop = {
    brand: "Apple",
    model: "MacBook Pro",
    specs: {
      ram: "16GB",
      storage: "512GB"
    }
  };
  console.log(laptop.specs.ram);
  console.log(laptop.specs.storage);
}
//user object se email aur phone dono get karo.
{
  const user = {
    name: "Sara",
    contact: {
      email: "sara@example.com",
      phone: "123-456-7890"
    }
  };
  console.log(`${user.contact.email} & ${user.contact.phone}`);
}
//Array ke second product ka name aur price get karo.
{
  const products = [
    { id: 1, name: "Laptop", price: 100000 },
    { id: 2, name: "Mobile", price: 50000 }
  ];
  console.log(`${products[1].name} && ${products[1].price}`);
}
//Playlist ke second song ko print karo.
{
  const playlist = {
    title: "Workout Mix",
    songs: ["Track 1", "Track 2", "Track 3"]
  };
  console.log(playlist.songs[1]);
}
//Sab students ke naam aur marks loop ke zariye print karo.
{
  const students = [
    { name: "Adeel", marks: 85 },
    { name: "Hira", marks: 92 },
    { name: "Tariq", marks: 78 }
  ];
  for (let i = 0; i < students.length; i++) {
    console.log(`${students[i].marks} && ${students[i].name}`);
  }
  // students.forEach(student=>{
  //     console.log(`${student.marks} && ${student.name}`);   
  // })
}
//company object se teamLead aur second developer ka naam get karo.
{
  const company = {
    name: "TechSoft",
    departments: {
      dev: {
        teamLead: "Amna",
        developers: ["Ali", "Zara", "Noman"]
      }
    }
  };
  console.log(`${company.departments.dev.teamLead} && ${company.departments.dev.developers}`);
}
//greetUser function ke andar object se name get karke Hello, Usman! print karo.
{
  const person = {
    name: "Usman",
    age: 28,
    city: "Karachi"
  };

  function greetUser(user) {
    user = `Hello, ${person.name}`;
    return user;
  }
  console.log(greetUser());
}
// Sirf un items ko print karo jinka price 100 ya us se zyada ho.
{
  const items = [
    { name: "Pen", price: 20 },
    { name: "Notebook", price: 100 },
    { name: "Bag", price: 500 }
  ];
  for (let i = 0; i < items.length; i++) {
    let newitem = ""
    if (items[i].price >= 100) {
      newitem = items[i].name
    }
    console.log(newitem);
  }
}
//Add New Property to Object,user object mein ek nayi property lastLogin add karo with value "2025-05-08".
{
  const user = {
    username: "hassan123",
    isOnline: true
  };
  user["LastLogin"] = "2025-05-08"
  console.log(user);
}
//Check Key Exists,Check karo ke language naam ki property settings object mein exist karti hai ya nahi. (Hint: "language" in settings)
{
  const settings = {
    theme: "dark",
    notifications: true,
    language: "English"
  };
  if ("language" in settings) {
    console.log(true);
  } else {
    console.log(false);
  }
}
//Object.keys + Loop, Sab keys aur unki values ko for...in ya Object.keys() ka use karke print karo.
{
  const laptop = {
    brand: "Dell",
    model: "XPS 13",
    price: 150000
  };
  const keys = Object.keys(laptop);
  for (let i = 0; i < keys.length; i++) {
    console.log(`${keys[i]} : ${laptop[keys[i]]}`);
  }
}
//Count Students Who Passed, Sirf un students ko count karo jinka marks >= 50 hain. (Output: Total passed students: 3)
{
  const students = [
    { name: "Ali", marks: 75 },
    { name: "Zara", marks: 50 },
    { name: "Noman", marks: 55 },
    { name: "Hira", marks: 33 }
  ];
  for (let i = 0; i < students.length; i++) {
    if (students[i].marks >= 50) {
      console.log(students[i]);
    }
  }
}
//Average Price of Products,Sab products ka average price calculate karo.
{
  const products = [
    { name: "Phone", price: 60000 },
    { name: "Tablet", price: 40000 },
    { name: "Laptop", price: 100000 }
  ];
  let total = 0
  for (let i = 0; i < products.length; i++) {
    total += products[i].price
  }
  let Average = total / products.length
  console.log(Average);
}
//Check Admin Access,Check karo kya koi user ka role "admin" hai? (Agar hai to print karo: "Admin found!")
{
  const users = [
    { name: "Sara", role: "user" },
    { name: "Ahmed", role: "admin" },
    { name: "Tariq", role: "moderator" }
  ];
  let isAdminFound = false;
  for (let i = 0; i < users.length; i++) {
    if (users[i].role === "admin") {
      isAdminFound = true;
      break;
    }
  }
  if (isAdminFound) {
    console.log("Admin found!");
  } else {
    console.log("Admin not found");
  }
}
//Group Employees by Department, HR aur IT department ke employees ke naam alag alag arrays mein daalo.
{
  const employees = [
    { name: "Adeel", department: "HR" },
    { name: "Zoya", department: "IT" },
    { name: "Sameer", department: "HR" },
    { name: "Amna", department: "IT" }
  ];
  let HRArray = []
  let ITArray = []
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].department === "HR") {
      HRArray.push(employees[i].name)
    } else {
      ITArray.push(employees[i].name)
    }
  }
  console.log(`[${HRArray}] && [${ITArray}] `);

}
//Deep Object Access + Function, showUserName function ke through deeply nested object se name access karo.
{
  const data = {
    status: "success",
    info: {
      user: {
        id: 101,
        profile: {
          name: "Farah",
          age: 25
        }
      }
    }
  };

  function showUserName(obj) {
    obj = `User name is ${data.info.user.profile.name}`
    return obj;
  }
  console.log(showUserName());
}
//Find the Oldest Person , Sab se zyada age wala banda find karo aur print karo: "Oldest person is Sana".
{
  const people = [
    { name: "Hassan", age: 30 },
    { name: "Sana", age: 45 },
    { name: "Bilal", age: 27 }
  ];
  let oldest = people[0];
  for (let i = 0; i < people.length; i++) {
    if (people[i].age > oldest.age) {
      console.log(people[i]);
    }
  }
}
//Extract Unique Departments,  Har department ka naam sirf ek baar print karo. (Output: IT, HR, Finance)
{
  const employees = [
    { name: "Ali", department: "IT" },
    { name: "Zara", department: "HR" },
    { name: "Usman", department: "IT" },
    { name: "Hira", department: "Finance" }
  ];
  let newArr = []
  for (let i = 0; i < employees.length; i++) {
    if (!newArr.includes(employees[i].department)) {
      newArr.push(employees[i].department)
    }
  }
  console.log(newArr);
}
// Sum of Even Numbers Only, Sirf even numbers ka sum karo. (Output: 20)
{
  const numbers = [
    { value: 12 },
    { value: 5 },
    { value: 8 },
    { value: 3 }
  ];
  let sum = 0
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i].value % 2 === 0) {
      sum += numbers[i].value
    }
  }
  console.log(sum);
}
//Count How Many Times Each Role Appears,  Har role (admin/user) kitni dafa aya, count karo.
// (Output: { admin: 2, user: 2 })
{
  const users = [
    { name: "Ali", role: "admin" },
    { name: "Zara", role: "user" },
    { name: "Tariq", role: "admin" },
    { name: "Hina", role: "user" }
  ];
  let obj = {}
  for (let i = 0; i < users.length; i++) {
    // const role = users[i].role;
    if (obj[users[i].role]) {
      obj[users[i].role] += 1
    } else {
      obj[users[i].role] = 1
    }
  }
  console.log(obj);
}
// Extract Names Starting with "A", Sirf un students ke naam print karo jo "A" se shuru hote hain. (Output: Adeel, Ali)
{
  const students = [
    { name: "Adeel" },
    { name: "Sara" },
    { name: "Ali" },
    { name: "Hina" }
  ];

  for (let i = 0; i < students.length; i++) {
    if (students[i].name[0] === "A") {
      console.log(students[i].name);
    }
  }
}
// Total Salary of Employees, Sab employees ki salary ka total nikalo.
{
  const employees = [
    { name: "Ali", salary: 50000 },
    { name: "Zara", salary: 60000 },
    { name: "Usman", salary: 55000 }
  ];
  let total = 0
  for (let i = 0; i < employees.length; i++) {
    total += employees[i].salary
  }
  console.log(total);
}
//Find Product by Name , Array mein se us product ko find karo jiska naam "Keyboard" hai.
{
  const products = [
    { name: "Mouse", price: 1000 },
    { name: "Keyboard", price: 2000 },
    { name: "Monitor", price: 15000 }
  ];
  for (let i = 0; i < products.length; i++) {
    if (products[i].name === "Keyboard") {
      console.log(products[i].name);
      break;
    }
  }
}
//Capitalize All Names,Har user ka name capitalize karo.
{
  const users = [
    { name: "ali" },
    { name: "zara" },
    { name: "hassan" }
  ];
  for (let i = 0; i < users.length; i++) {
    users[i].name = users[i].name[0].toUpperCase() + users[i].name.slice(1);
  }
  console.log(users);
}
//Find Duplicate Roles, Aise roles find karo jo repeat ho rahe hain.
{
  const team = [
    { name: "Adeel", role: "designer" },
    { name: "Hira", role: "developer" },
    { name: "Tariq", role: "designer" },
    { name: "Zoya", role: "tester" }
  ];
  let Duplicate = []
  let countRole = {}
  for (let i = 0; i < team.length; i++) {
    const role = team[i].role;
    countRole[role] = (countRole[role] || 0) + 1;
  }
  for (let role in countRole) {
    if (countRole[role] > 1) {
      Duplicate.push(role);
    }
  }
  console.log(Duplicate);
}
//Merge Two User Objects, user1 aur user2 ko merge karke ek single object banao.
{
  const user1 = { name: "Ayesha", age: 24 };
  const user2 = { city: "Lahore", isActive: true };
  // let user3 = Object.assign(user1,user2) 
  let user3 = { ...user1, ...user2 }
  console.log(user3);
}
// Find Users Who Are Online, Sirf un users ke naam print karo jo isOnline: true hain.
{
  const users = [
    { name: "Ali", isOnline: true },
    { name: "Zara", isOnline: false },
    { name: "Hassan", isOnline: true }
  ];
  for (let i = 0; i < users.length; i++) {
    if (users[i].isOnline === true) {
      console.log(users[i].name);
    }
  }
}
//Total Price of Items in Cart, Total cart price calculate karo using price * quantity for each item.
{
  const cart = [
    { name: "Phone", price: 50000, quantity: 2 },
    { name: "Headphones", price: 5000, quantity: 1 },
    { name: "Charger", price: 2000, quantity: 3 }
  ];
  let total = 0
  for (let i = 0; i < cart.length; i++) {
    let calculatePrice = cart[i].price * cart[i].quantity
    total += calculatePrice
  }
  console.log(total);
}
//Find Students With Name Starting With S , Sirf un students ke naam print karo jo "S" se shuru hote hain.
{
  const students = [
    { name: "Sana" },
    { name: "Hira" },
    { name: "Salman" },
    { name: "Tariq" }
  ];
  for (let i = 0; i < students.length; i++) {
    if (students[i].name[0] === 'S') {
      console.log(students[i].name);
    }
  }
}
//Create a List of Full Names, Har person ka full name (e.g. "Ali Raza") naya array bana ke return karo.
{
  const people = [
    { firstName: "Ali", lastName: "Raza" },
    { firstName: "Zara", lastName: "Khan" },
    { firstName: "Noman", lastName: "Qureshi" }
  ];
  let fullNames = [];
  for (let i = 0; i < people.length; i++) {
    fullNames.push(`${people[i].firstName} ${people[i].lastName}`);
  }
  console.log(fullNames);
}
//Count Number of Products Over 1000,Kitne products hain jinka price 1000 se zyada hai? (Output: 2)
{
  const products = [
    { name: "Pen", price: 200 },
    { name: "Bag", price: 1500 },
    { name: "Shoes", price: 3000 },
    { name: "Book", price: 700 }
  ];
  let countProduct = 0
  for (let i = 0; i < products.length; i++) {
    if (products[i].price > 1000) {
      countProduct += 1
    }
  }
  console.log(countProduct);
}
// Get Names of Users With Gmail Accounts, Sirf un users ke naam print karo jinka email "@gmail.com" se end hota ho.
{
  const users = [
    { name: "Ali", email: "ali@gmail.com" },
    { name: "Zara", email: "zara@yahoo.com" },
    { name: "Hassan", email: "hassan@gmail.com" }
  ];
  let userName = []
  for (let i = 0; i < users.length; i++) {
    if (users[i].email.endsWith("@gmail.com")) {
      userName.push(users[i].name);
    }
  }
  console.log(userName);
}
//Find Product with Highest Price , Sab se mehenga product find karo aur print karo: "Most expensive product is Laptop".
{
  const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mobile", price: 8000 },
    { name: "Watch", price: 3000 }
  ];
  let maxPrice = 0
  for (let i = 0; i < products.length; i++) {
    if (products[i].price > maxPrice) {
      maxPrice = products[i].name
    }
  }
  console.log(`Most expensive product is ${maxPrice}`);
}
//Get Average Marks of Students, In students ka average marks calculate karo.
{
  const students = [
    { name: "Ali", marks: 90 },
    { name: "Zara", marks: 80 },
    { name: "Hassan", marks: 70 }
  ];
  const Average = students.reduce((total, current) => {
    total += current.marks
    return total;
  }, 0)
  const newAvg = Average / students.length
  console.log(newAvg);
}
//Remove Duplicates by Name, Array mein se duplicate names hatao (sirf unique name wale objects rakho).
{
  const data = [
    { name: "Ali" },
    { name: "Zara" },
    { name: "Ali" },
    { name: "Hira" }
  ];
  let UniqueArr = []
  for (let i = 0; i < data.length; i++) {
    if (!UniqueArr.includes(data[i].name)) {
      UniqueArr.push(data[i].name)
    }
  }
  console.log(UniqueArr);
}
// Group Users by Age Category , Users ko do groups mein divide karo: 2 arrays banao: adults[] aur minors[]
{
  const users = [
    { name: "Ali", age: 25 },
    { name: "Hira", age: 17 },
    { name: "Tariq", age: 35 },
    { name: "Sana", age: 15 }
  ];
  let Adults = []
  let minors = []
  for (let i = 0; i < users.length; i++) {
    if (users[i].age > 18) {
      Adults.push(users[i].name)
    }
    else if (users[i].age < 18) {
      minors.push(users[i].name)
    }
  }
  console.log(`Adult : [${Adults}] && Minors : [${minors}]`);
}
// Filter Students Who Scored Grade A, 
{
  const students = [
    { name: "Ali", marks: 85 },
    { name: "Zara", marks: 92 },
    { name: "Hassan", marks: 73 },
    { name: "Aleyar", marks: 93 }
  ];
  let AGradeArr = []
  for (let i = 0; i < students.length; i++) {
    if (students[i].marks >= 90) {
      AGradeArr.push(students[i].name)
    }
  }
  console.log(`[${AGradeArr}] get A Grade`);
}
//Count Active Users , Sirf active users count karo.
{
  const users = [
    { name: "Sara", active: true },
    { name: "Tariq", active: false },
    { name: "Zoya", active: true }
  ];
  let ActiveUser = []
  for (let i = 0; i < users.length; i++) {
    if (users[i].active === true) {
      ActiveUser.push(users[i].name)
    }
  }
  console.log(ActiveUser);
}
//Get All Mobile Numbers , Sab mobile numbers ka ek array banao. (Output: ["03211234567", "03121234567"])
{
  const contacts = [
    { name: "Ali", phone: "03211234567" },
    { name: "Zara", phone: "03121234567" }
  ];
  let MobilePhoneArr = []
  for (let i = 0; i < contacts.length; i++) {
    MobilePhoneArr.push(contacts[i].phone)
  }
  console.log(MobilePhoneArr);
}
//Find Total Likes on Posts ,  Total likes count karo. 
{
  const posts = [
    { id: 1, likes: 20 },
    { id: 2, likes: 35 },
    { id: 3, likes: 10 }
  ];
  let count = 0
  for (let i = 0; i < posts.length; i++) {
    count += posts[i].likes
  }
  console.log(count);
}
// Find Users with Long Names (>5 letters), Aise users ke naam print karo jinka naam 5 se zyada letters ka hai.
{
  const users = [
    { name: "Ahsan" },
    { name: "Zulekha" },
    { name: "Sami" }
  ];
  let newArr = []
  for (let i = 0; i < users.length; i++) {
    if (users[i].name.length > 5) {
      newArr.push(users[i].name)
    }
  }
  console.log(newArr);
}
// Extract Emails of Users Over 18 , Sirf 18+ users ke emails ka array banao.
{
  const users = [
    { name: "Ali", age: 17, email: "ali@example.com" },
    { name: "Sana", age: 20, email: "sana@example.com" },
    { name: "Aleyar", age: 19, email: "ali@example.com" },
    { name: "Eman", age: 22, email: "sana@example.com" }
  ];
  let newArr = []
  for (let i = 0; i < users.length; i++) {
    if (users[i].age > 18) {
      newArr.push(users[i].email)
    }
  }
  console.log(newArr);
}
//Convert Data to Name + Age String ,
{
  const people = [
    { name: "Hira", age: 22 },
    { name: "Adeel", age: 30 }
  ];
  let result = []
  for (let i = 0; i < people.length; i++) {
    result.push(`${people[i].name} is ${people[i].age} years old`);
  }
  console.log(result);
}
// Count Products in Each Category,  Category-wise count return karo:
{
  const products = [
    { name: "Mouse", category: "Electronics" },
    { name: "Shirt", category: "Clothing" },
    { name: "Keyboard", category: "Electronics" }
  ];
  let countCategory = {}
  for (let i = 0; i < products.length; i++) {
    countCategory[products[i].category] = (countCategory[products[i].category] || 0) + 1
  }
  console.log(countCategory);

}
{
  // You have an array of people objects. Group them by their age.

  const people = [
    { name: 'Ali', age: 20 },
    { name: 'Sara', age: 25 },
    { name: 'John', age: 20 },
    { name: 'Emma', age: 30 }
  ];
  // const groupedByAge = people.reduce((acc, person) => {
  //     const age = person.age;
  //     if(!acc[age]) {
  //         acc[age] = [];
  //     }
  //     acc[age].push(person);
  //     return acc;
  // },{});
  let groupedByAge = {}
  for (let i = 0; i < people.length; i++) {

    if (!groupedByAge[people[i].age]) {
      groupedByAge[people[i].age] = []
    }
    groupedByAge[people[i].age].push(people[i])
  }
  console.log(groupedByAge);
}
// Filter Books by Author, Sirf "Ali" ke likhe books return karo.
{
  const books = [
    { title: "JS Basics", author: "Ali" },
    { title: "React Guide", author: "Sana" },
    { title: "Advanced JS", author: "Ali" }
  ];
  newArr = []
  for (let i = 0; i < books.length; i++) {
    if (books[i].author === "Ali") {
      newArr.push(books[i].title)
    }
  }
  console.log(newArr);
  const newBook = books.filter(x => x.author === "Ali")
  console.log(newBook);

}
// Find Average Age , In sab ka average age calculate karo.
{
  const users = [
    { name: "Usman", age: 22 },
    { name: "Hina", age: 26 },
    { name: "Faisal", age: 30 }
  ];
  let totalAge = 0
  let avg = 0
  for (let i = 0; i < users.length; i++) {
    totalAge += users[i].age
  }
  avg = totalAge / users.length
  console.log(avg);
  const avgAge = users.reduce((sum, current) => sum + current.age, 0)
  const newAvg = avgAge / users.length
  console.log(newAvg);
}
//  Add isMinor: true/false to Each User , Har user object mein isMinor key add karo (true if age < 18).
{
  const users = [
    { name: "Ali", age: 16 },
    { name: "Hassan", age: 19 }
  ];
  for (let i = 0; i < users.length; i++) {
    if (users[i].age < 18) {
      users[i].isMinor = true;
    } else {
      users[i].isMinor = false;
    }
  }
  console.log(users);
}
//Filter Products in Stock , Sirf in-stock products ka array return karo.
{
  const products = [
    { name: "Laptop", inStock: true },
    { name: "Charger", inStock: false },
    { name: "Mobile", inStock: true }
  ];
  let inStockProducts = []
  for (let i = 0; i < products.length; i++) {
    if (products[i].inStock === true) {
      inStockProducts.push(products[i].name)
    }
  }
  console.log(inStockProducts);
}
// Format Names as "Mr./Ms." Prefix ,  Output banayein: ["Mr. Ali", "Ms. Sara"]
{
  const people = [
    { name: "Ali", gender: "male" },
    { name: "Sara", gender: "female" }
  ];
  let formatedName = []
  for (let i = 0; i < people.length; i++) {
    const Prefix = people[i].gender === "male" ? "Mr." : "Ms."
    formatedName.push(`${Prefix}${people[i].name}`)
  }
  console.log(formatedName);
}
//Calculate Total Price with Tax (10%) ,  Total price with 10% tax calculate karo.
{
  const items = [
    { name: "Book", price: 500 },
    { name: "Pen", price: 50 }
  ];
  let AddTax = []
  for (let i = 0; i < items.length; i++) {
    let Tax = items[i].price * 10 / 100
    let totalPrice = items[i].price + Tax
    AddTax.push(totalPrice)
  }

  console.log(AddTax);
}
//Capitalize First Letter of Each Name , Har name ka first letter capital karo (e.g. Ali, Zara, Tariq)
{
  const users = [
    { name: "ali" },
    { name: "zara" },
    { name: "tariq" }
  ];
  let newArr = []
  for (let i = 0; i < users.length; i++) {
    capitalize = users[i].name[0].toUpperCase() + users[i].name.slice(1);
    newArr.push(capitalize)
  }
  console.log(newArr);
}
//Get Names of Users With Role "admin" , Sirf "admin" users ke naam ka array return karo.
{
  const users = [
    { name: "Ali", role: "user" },
    { name: "Zoya", role: "admin" },
    { name: "Hassan", role: "user" },
    { name: "Tariq", role: "admin" },
  ];
  let AdminName = []
  for (let i = 0; i < users.length; i++) {
    if (users[i].role === "admin") {
      AdminName.push(users[i].name)
    }
  }
  console.log(AdminName);

}
//Sum of All Even Ages , Sirf even ages ka total nikalo. (20 + 28 = 48)
{
  const people = [
    { name: "Sana", age: 20 },
    { name: "Faisal", age: 17 },
    { name: "Nida", age: 28 }
  ];
  let totalAge = 0
  for (let i = 0; i < people.length; i++) {
    if (people[i].age % 2 === 0) {
      totalAge += people[i].age
    }
  }
  console.log(totalAge);

}
//Get List of Out-of-Stock Products ,  Jinke stock 0 hain, un products ka naam return karo.
{
  const products = [
    { name: "Phone", stock: 10 },
    { name: "Tablet", stock: 0 },
    { name: "Laptop", stock: 5 },
    { name: "Charger", stock: 0 },
  ];
  let OutofStock = []
  for (let i = 0; i < products.length; i++) {
    if (products[i].stock === 0) {
      OutofStock.push(products[i].name)
    }
  }
  console.log(OutofStock);
}
// Add status: "pass"/"fail" Based on Marks , Marks ≥ 50 → "pass", otherwise "fail"
// Har student object me new key status add karo. 
{
  const students = [
    { name: "Ali", marks: 70 },
    { name: "Hira", marks: 45 },
    { name: "Usman", marks: 85 },
  ];
  for (let i = 0; i < students.length; i++) {
    if (students[i].marks >= 50) {
      students[i].status = "pass"
    } else {
      students[i].status = "fail"
    }
  }
  console.log(students);
}
//Create an Object Grouped by City , 
{
  const users = [
    { name: "Zara", city: "Lahore" },
    { name: "Ali", city: "Karachi" },
    { name: "Sana", city: "Lahore" }
  ];
  let newObj = {}
  for (let i = 0; i < users.length; i++) {
    if (!newObj[users[i].city]) {
      newObj[users[i].city] = []
    }
    newObj[users[i].city].push(users[i])
  }
  console.log(newObj);
}
// Find Product With Lowest Price , Sab se sasta product find karo. Output: "Eraser"
{
  const products = [
    { name: "Pen", price: 50 },
    { name: "Notebook", price: 200 },
    { name: "Eraser", price: 20 }
  ];
  let LowestPrice = products[0].price
  let CheapestPrice = products[0].name
  for (let i = 0; i < products.length; i++) {
    if (products[i].price < LowestPrice) {
      LowestPrice = products[i].price
      CheapestPrice = products[i].name
    }
  }
  console.log(CheapestPrice);

}
//Remove Users Without Email , Sirf un users ko rakhna hai jinka email hai.
{
  const users = [
    { name: "Hassan", email: "hassan@example.com" },
    { name: "Adeel" },
    { name: "Sadia", email: "sadia@example.com" }
  ];
  let newUser = []
  for (let i = 0; i < users.length; i++) {
    if (users[i].email) {
      newUser.push(users[i].name)
    }
  }
  console.log(newUser);
}
//Add FullName to Each User , Har user object me ek fullName key add karo.
{
  const users = [
    { firstName: "Ali", lastName: "Raza" },
    { firstName: "Sara", lastName: "Malik" }
  ];

  for (let i = 0; i < users.length; i++) {
    users[i].fullNames = users[i].firstName + " " + users[i].lastName
  }
  console.log(users);
}
//Find How Many Users Are From Each Country.
{
  const users = [
    { name: "Ali", country: "Pakistan" },
    { name: "Zara", country: "India" },
    { name: "Usman", country: "Pakistan" }
  ];
  let newObj = {}
  for (let i = 0; i < users.length; i++) {
    if (newObj[users[i].country]) {
      newObj[users[i].country] += 1
    } else {
      newObj[users[i].country] = 1
    }
  }
  console.log(newObj);
}
//Create Object from Array , 
{
  const items = [
    { id: 1, value: "Apple" },
    { id: 2, value: "Banana" }
  ];
  let newObject = {}
  for (let i = 0; i < items.length; i++) {
    newObject[items[i].id] = items[i].value
  }
  console.log(newObject);
}
//Filter Comments Longer Than 50 Characters , Sirf woh comments return karo jinka length > 50 ho.
{
  const comments = [
    { text: "Great job!" },
    { text: "This explanation was very helpful and detailed." },
    { text: "This explanation was very helpful and detailed.This explanation was very helpful and detailed." }
  ];
  let newArr = []
  for (let i = 0; i < comments.length; i++) {
    if (comments[i].text.length > 50) {
      newArr.push(comments[i])
    }
  }
  console.log(newArr);

}
//Sort Users by Age (Ascending) , Users ko unki age ke mutabiq ascending order me sort karo.
{
  const users = [
    { name: "Hira", age: 25 },
    { name: "Tariq", age: 20 },
    { name: "Sana", age: 30 }
  ];

  for (let i = 0; i < users.length - 1; i++) {
    for (let j = 0; j < users.length - 1 - i; j++) {
      if (users[j].age > users[j + 1].age) {
        let temp = users[j]
        users[j] = users[j + 1]
        users[j + 1] = temp
      }
    }

  }
  console.log(users);
  //  users.sort((a,b)=>a.age - b.age)
  // console.log(users);
}
// Flatten a Nested Array of Tags ,  Ek flat array banao jismein saare unique tags ho.
// Output: ["javascript", "web", "react", "growth", "career"]
{
  const posts = [
    { title: "JS Tips", tags: ["javascript", "web"] },
    { title: "React Guide", tags: ["react", "web"] },
    { title: "Career Advice", tags: ["growth", "career"] }
  ];
  let uniqueWord = []
  for (let i = 0; i < posts.length; i++) {
    for (let j = 0; j < posts[i].tags.length; j++) {
      const tag = posts[i].tags[j]
      if (!uniqueWord.includes(tag)) {
        uniqueWord.push(tag)
      }
    }
  }
  console.log(uniqueWord);
}
// Find Most Common Category , Kaunsi category sab se zyada dafa ayi hai? Output: "Electronics"
{
  const products = [
    { name: "Mouse", category: "Electronics" },
    { name: "Keyboard", category: "Electronics" },
    { name: "Shirt", category: "Clothing" },
    { name: "Headphones", category: "Electronics" },
    { name: "Jeans", category: "Clothing" }
  ];
  let maxCategory = {}
  for (let i = 0; i < products.length; i++) {
    if (maxCategory[products[i].category]) {
      maxCategory[products[i].category]++;
    } else {
      maxCategory[products[i].category] = 1;
    }
  }

  let mostCommon = "";
  let max = 0;
  for (const category in maxCategory) {
    if (maxCategory[category] > max) {
      max = maxCategory[category]
      mostCommon = category
    }
  }
  console.log(mostCommon);
}
//  Combine Orders by Customer,  Har customer ka total amount return karo:
// { Ali: 250, Zara: 50 } Lahore
{
  const orders = [
    { customer: "Ali", amount: 100 },
    { customer: "Zara", amount: 50 },
    { customer: "Ali", amount: 150 }
  ];
  let obj = {}
  for (let i = 0; i < orders.length; i++) {
    if (!obj[orders[i].customer]) {
      obj[orders[i].customer] = 0
    }
    obj[orders[i].customer] += orders[i].amount
  }
  console.log(obj);
}
console.log("new obj");

//Remove Null or Undefined Properties, Ek naya object return karo jismein null/undefined properties na hon.
// Output: { name: "Hira", phone: "03211234567" }
{
  const user = {
    name: "Hira",
    email: null,
    phone: "03211234567",
    address: undefined
  };
  let NewObj = {}
  for (const key in user) {
    if (user[key] !== null && user[key] !== undefined) {
      NewObj[key] = user[key]
    }
  }
  console.log(NewObj);
}
//Build a Lookup by ID,  Ek object banao jahan key = id ho, value = poora object.
{
  const users = [
    { id: 1, name: "Ali" },
    { id: 2, name: "Zara" },
    { id: 3, name: "Usman" }
  ];
  let Lookup = {}
  //   for (let i = 0; i < users.length; i++) {
  // Lookup[users[i].id] = users[i]    
  //   }
  for (const key of users) {
    Lookup[key.id] = key
  }
  console.log(Lookup);
}
//Find User with Longest Bio ,  Jiski bio sabse lambi ho, uska name return karo.
// (Hint: use .length on bio)
{
  const users = [
    { name: "Sara", bio: "Frontend dev" },
    { name: "Hassan", bio: "Full stack developer specializing in React and Node.js" },
    { name: "Ali", bio: "Backend dev" }
  ];
  let longestBioLength = 0;
  let LognestBioName = ""
  for (let i = 0; i < users.length; i++) {
    if (users[i].bio.length > longestBioLength) {
      longestBioLength = users[i].bio.length
      LognestBioName = users[i].name
    }
  }
  console.log(LognestBioName);
}
// Format User Display Strings , Output array banao:
// ["Ali Raza (admin)", "Sara Malik (editor)"]
{
  const users = [
    { firstName: "Ali", lastName: "Raza", role: "admin" },
    { firstName: "Sara", lastName: "Malik", role: "editor" }
  ];
  let fullName = []
  for (let i = 0; i < users.length; i++) {
    fullName.push(`${users[i].firstName} ${users[i].lastName} (${users[i].role})`)
  }
  console.log(fullName);
}
// Check If All Users Are Verified ,  Check karo ke kya sab users verified: true hain?
// Output: false
{
  const users = [
    { name: "Ali", verified: true },
    { name: "Zoya", verified: true },
    { name: "Sana", verified: false }
  ];
  let AllVerified = true
  //   for (let i = 0; i < users.length; i++) {
  // if(users[i].verified === true){
  //   AllVerified = false;
  //   break;
  // }   
  //   }

  for (const user in users) {
    if (users[user].verified === true) {
      AllVerified = false;
      break;
    }
  }
  console.log(AllVerified);
  const newverify = users.every(x => x.verified === true)
  console.log(newverify);
}
// Find Duplicate Emails , Duplicate emails ka array banao.
// Output: ["a@example.com"]
{
  const users = [
    { email: "a@example.com" },
    { email: "b@example.com" },
    { email: "a@example.com" },
    { email: "c@example.com" }
  ];
  let duplicateEmail = []
  let newDuplicateArr = {}
  for (let i = 0; i < users.length; i++) {
    let dupli = users[i].email;
    newDuplicateArr[dupli] = (newDuplicateArr[dupli] || 0) + 1;
  }
  for (const email in newDuplicateArr) {
    if (newDuplicateArr[email] > 1) {
      duplicateEmail.push(email)

    }
  }
  console.log(duplicateEmail);
}
// Merge Two Arrays by ID ,  Har user ke saath unka score bhi merge karo:
{
  const users = [
    { id: 1, name: "Ali" },
    { id: 2, name: "Zara" }
  ];
  const scores = [
    { id: 1, score: 95 },
    { id: 2, score: 80 }
  ];
  for (let i = 0; i < users.length; i++) {
    for (let j = 0; j < scores.length; j++) {
      if (users[i].id === scores[j].id) {
        users[i].score = scores[j].score
      }
    }
  }
  console.log(users);
}
//Sort Users by Name (Case-insensitive) , Users ko name ke mutabiq sort karo (case-insensitive).
{
  const users = [
    { name: "zara" },
    { name: "Ali" },
    { name: "bilal" }
  ];
  users.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (nameA < nameB) {
      return -1;
    } else if (nameA > nameB) {
      return 1;
    } else {
      return 0;
    }
  });
  // users.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
  console.log(users);

}
// Extract All Unique Roles, Saare unique roles ka array banao: ["admin", "editor"]
{
  const users = [
    { name: "Ali", role: "admin" },
    { name: "Sara", role: "editor" },
    { name: "Hassan", role: "admin" }
  ];
  let newArr = []
  for (let i = 0; i < users.length; i++) {
    if (!newArr.includes(users[i].role)) { //Agar newArr mein users[i].role maujood nahi hai, to isay newArr mein daal do.
      newArr.push(users[i].role)
    }
  }
  console.log(newArr);
}
//Transform Product List to Name Array ,Sirf name values ka array banao.
{
  const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 500 },
    { id: 3, name: "Tablet", price: 800 }
  ];
  const NameArr = products.map(product => (product.name));
  console.log(NameArr);
  let Arr = []
  for (let i = 0; i < products.length; i++) {
    Arr.push(products[i].name)
  }
  console.log(Arr);
}
// Filter Expensive Products , Sirf woh products return karo jinki price ≥ 300
{
  const products = [
    { name: "Monitor", price: 300 },
    { name: "Keyboard", price: 50 },
    { name: "PC", price: 1200 }
  ];
  const productCostly = products.filter(product => (product.price) >= 300)
  console.log(productCostly);
  let costlyArr = []
  for (let i = 0; i < products.length; i++) {
    if (products[i].price >= 300) {
      costlyArr.push(products[i])
    }
  }
  console.log(costlyArr); 
}
// Transform User Object to Display Format,Display string banao:
// Output: ["Ali Raza (22)", "Sara Malik (30)"]
{
  const users = [
    { firstName: "Ali", lastName: "Raza", age: 22 },
    { firstName: "Sara", lastName: "Malik", age: 30 }
  ];
const userFormat = users.map(user=>`${user.firstName} ${user.lastName} (${user.age})`);
console.log(userFormat);
let newArr = []
for (let i = 0; i < users.length; i++) {
  newArr.push(`${users[i].firstName} ${users[i].lastName} (${users[i].age})`) 
}
console.log(newArr);
}
// Group Products by Category , 
{
  const products = [
    { name: "Shirt", category: "Clothing" },
    { name: "Jeans", category: "Clothing" },
    { name: "Mouse", category: "Electronics" }
  ];
  let groupedProducts = {};
  for (let i = 0; i < products.length; i++) {
  if (!groupedProducts[products[i].category]) {
    groupedProducts[products[i].category] = [];
  }
  groupedProducts[products[i].category].push(products[i].name)
  }
  console.log(groupedProducts);
}
//Count Users by Status , 
{
  const users = [
    { name: "A", status: "active" },
    { name: "B", status: "inactive" },
    { name: "C", status: "active" },
    { name: "D", status: "pending" }
  ];
  let countObj = {}
  for (let i = 0; i < users.length; i++) {
   if (countObj[users[i].status]) {
    countObj[users[i].status] += 1
   }else{
    countObj[users[i].status] = 1
   } 
  }
 console.log(countObj);
}
//Add isPremium Flag to Users Based on Age.
{
  const users = [
    { name: "Ali", age: 17 },
    { name: "Sara", age: 25 }
  ];
  for (let i = 0; i < users.length; i++) {
    // users[i].isPremium = users[i].age >= 18;
    if (users[i].age >= 18) {
      users[i].isPremium = true
    }else{
      users[i].isPremium =false
    }
  }
console.log(users);
}
// Filter Based on Search Text (Case-insensitive) , Search string se match hone wale products return karo.
// Output: [ { name: "Samsung Galaxy" } ]
{
  const products = [
    { name: "iPhone 14" },
    { name: "Samsung Galaxy" },
    { name: "OnePlus" }
  ];
  const search = "OnePlus";
  const result = [];
for (let i = 0; i < products.length; i++) {
  let productName = products[i].name.toLowerCase();
  let searchText = search.toLowerCase()
  if (productName.includes(searchText)) {
    result.push(products[i])
  } 
}
console.log(result);

}