fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((res) => res.json())
  .then((data) => {
    console.log("User Name:", data.name);
    console.log("Email:", data.email);

  });
  fetch("https://jsonplaceholder.typicode.com/users/2")
  .then((res) => res.json())
  .then((data) => {
    console.log("User Name:", data.name);
    console.log("Company:", data.company.name);

  });

//   [ Client (Browser) ]
//         |
//    fetch("/users/1")
//         |
//         v
// [ Server (API Endpoint) ]
//         |
//   Responds with JSON
//         |
//         v
// { "id": 1, "name": "Leanne Graham", ... }
