// Q:
// Tumhe "https://jsonplaceholder.typicode.com/users/1" se user ka data fetch karna hai.
// Agar user ka name "Leanne Graham" ho to:
// Console mein: "✅ Correct user found!"
// Agar name kuch aur ho:
// Console mein: "❌ User does not match."
// Aur agar fetch mein koi error ho jaye (jaise internet band ho):
// Console mein: "🚫 Network or fetch error"
// fetch("https://fakestoreapi.com/products/1")
//   .then(res => res.json())
//   .then(data => {
//     document.getElementById("productImage").src = data.image;
//     document.getElementById("productTitle").textContent = data.title;
//     document.getElementById("productPrice").textContent = "$" + data.price;
//     document.getElementById("productDesc").textContent = data.description;
//   })
//   .catch(() => {
//     document.getElementById("productTitle").textContent = "❌ Error loading";
//   });
// fetch("https://fakestoreapi.com/products")
//   .then(res => res.json())
//   .then(products => {
//     const container = document.getElementById("productContainer");

//     const firstSix = products.slice(0, 6);

//     firstSix.forEach(product => {
//       const card = document.createElement("div");
//       card.className = "card";

//       card.innerHTML = `
//         <img src="${product.image}" alt="Product Image" />
//         <div class="title">${product.title}</div>
//         <div class="price">$${product.price}</div>
//         <div class="desc">${product.description}</div>
//       `;

//       container.appendChild(card);
//     });
//   })
//   .catch(() => {
//     document.getElementById("productContainer").innerHTML =
//       "<p>❌ Error loading products</p>";
//   });

fetch("https://randomuser.me/api/")
  .then(res => res.json())
  .then(data => {
    const user = data.results[0];
    const container = document.querySelector(".userContainer");

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${user.picture.large}" alt="User Image" style="border-radius: 10px; width: 150px;" />
      <div class="fullname">${user.name.first} ${user.name.last}</div>
      <div class="email">${user.email}</div>
    `;

    container.innerHTML = "";
    container.appendChild(card);
  })
  .catch(err => {
    console.log("Error fetching user", err);
  });

