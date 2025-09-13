fetch("https://jsonplaceholder.typicode.com/users/3")
  .then((response) => response.json())
  .then((user) => {
    console.log("Fetched User:", user.name);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

fetch("https://jsonplaceholder.typicode.com/users/4")
  .then((response) => response.json())
  .then((user) => {
    console.log("Fetched User Name:", user.username);
    console.log("Fetched User Email:", user.email);
    console.log("Fetched User Address:", user.address.city);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

//   fetch("url")
//    |
//    v
// [ Promise (Pending) ]
//    |
//    |--> Success --> .then(result)
//    |
//    |--> Failure --> .catch(error)
