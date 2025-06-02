// const promiseOne = new Promise(function(resolve, reject){
//     //Do an async task
//     // DB calls, cryptography, network
//     setTimeout(function(){
//         console.log('Async task is compelete');
//         resolve()
//     }, 1000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     }, 1000)

// }).then(function(){
//     console.log("Async 2 resolved");
// })

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "Chai", email: "chai@example.com"})
//     }, 1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else {
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)
// })

//  promiseFour
//  .then((user) => {
//     console.log(user);
//     return user.username
// }).then((username) => {
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(() => console.log("The promise is either resolved or rejected"))



// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "javascript", password: "123"})
//         } else {
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000)
// });

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

// fetch('https://api.github.com/users/hiteshchoudhary')
// .then((response) => {
//     return response.json()
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.



// Aik Promise banao jo delivery ka status check kare. Agar:
// deliveryStatus === "ontime" ho to message ho: "Delivery arrived on time!"
// deliveryStatus === "late" ho to message ho: "Delivery is late but still coming..."
// warna: "Delivery Cancelled" show ho (i.e. rejected ho jaye)
console.log("Promise started... (pending)");
const checkDelivery = new Promise((resolve, rejected) => {
  const deliveryStatus = "late"
  setTimeout(() => {
    if (deliveryStatus === "ontime") {
      resolve("Delivery arrived on time!")
    } else if (deliveryStatus === "late") {
      resolve("Delivery is late but still coming... ")
    } else {
      rejected("Delivery Cancelled")
    }
  }, 2000);
})
checkDelivery
  .then((msg) => {
    console.log("Fulfilled:", msg);
  })
  .catch((err) => {
    console.log("Rejected", err);
  });


// Question 1: Exam Result Checker
// Aik promise banao jo check kare agar marks >= 40 hain to:

// "You passed the exam!" (fulfilled)

// warna: "You failed the exam!" (rejected)

// Use setTimeout for 2 seconds delay
// Console mein "Checking result..." show karo before promise
console.log("checking result ...");
const resultChecker = new Promise((resolve, rejected) => {
  const marks = 50
  setTimeout(() => {
    if (marks >= 40) {
      resolve("You passed the exam!");
    } else {
      rejected("You failed the exam!")
    }
  }, 2000)
})
resultChecker
  .then((msg) => {
    console.log("fulfilled", msg);
  })
  .catch((err) => {
    console.log("rejected", err);
  })

// Question 2: Food Order Status
// Status ho sakta hai: "delivered", "preparing", "cancelled"
// Promise return kare:
// "Your food has been delivered!" (fulfilled)
// "Food is still being prepared..." (fulfilled)
// "Your order was cancelled." (rejected)
// ✅ Delay: 1.5 seconds
// ✅ Initial console: "Order placed. Waiting..."
console.log("Order placed. Waiting...");
const foodOrderStatus = new Promise((resolve, rejected) => {
  const orderStatus = "delivered"
  setTimeout(() => {
    if (orderStatus === "delivered") {
      resolve("Your food has been delivered!");
    } else if (orderStatus === "preparing") {
      resolve("Food is still being prepared...");
    } else {
      rejected("Your order was cancelled.")
    }
  }, 1500)
})
foodOrderStatus.then((msg) => {
  console.log("fulfilled:", msg);
})
  .catch((err) => {
    console.log("rejected", err);
  })

// Question 3: Job Application Result
// Status: "selected", "interview", "rejected"
// If "selected" → "Congratulations! You got the job!"
// If "interview" → "You have been shortlisted for interview."
// Else → "Unfortunately, your application was not accepted."
// Use setTimeout and handle with .then() and .catch().

console.log(' Job Application Result....');
const JobApplicationResult = new Promise ((resolve, rejected) => {
  const jobResult = "interview"
  setTimeout(() => {
    if (jobResult === "selected") {
      resolve("Congratulations! You got the job!")
    } else if (jobResult === "interview") {
      resolve("You have been shortlisted for interview.")
    } else {
      rejected("Unfortunately, your application was not accepted.");
    }
  }, 1000);
});
JobApplicationResult
  .then((msg) => {
    console.log("Fulfilled:", msg);
  })
  .catch((err) => {
    console.log("Rejected:", err);
  })

//Question 4: Recharge System
// Check if balance >= 100:
// Yes → resolve with "Recharge successful ✅"
// No → reject with "Recharge failed ❌ - Low balance"
// Initial log: "Processing recharge..."
console.log("Processing recharge...");
const rechargeSystem = new Promise ((resolve,rejected)=>{
const balance = 80
setTimeout(() => {
  if (balance >= 100) {
    resolve("Recharge successful")
  } else {
    rejected("Recharge failed - Low balance")
  }
}, 1000);
})
rechargeSystem
.then((blnc)=>{
  console.log("Fullfilled:",blnc);
})
.catch((err)=>{
console.log("Rejected:",err);
});

// Question 5: Friend's Reply
// Tum friend ko message karti ho:
// Agar wo reply kare → resolve with "Friend replied 👍"
// Agar reply delayed ho → resolve with "Friend is busy, but will reply later ⏳"
// Agar reply nahi kare → reject with "No reply received 😐"
// Randomly pick one value using Math.random().

const FriendReply = new Promise ((resolve,rejected)=>{
  const replies = ["yes", "delay", "no"];
  const randomIndex = Math.floor(Math.random() * replies.length);
  const reply = replies[randomIndex];
setTimeout(() => {
  if(reply === "yes"){
resolve ("Friend replied!")
  }else if(reply === "delay"){
    resolve("Friend is busy, but will reply later")
  }else{
    rejected("No reply received")
  }
}, 3000);
})
FriendReply
.then((msg)=>{
  console.log("Fulfilled: ",msg);
})
.catch((err)=>{
  console.log("Rejected: ",err);
})
.finally(() => {
  console.log("Promise complete — clean up done!");
});
