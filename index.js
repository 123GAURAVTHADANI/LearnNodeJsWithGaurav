document.getElementById("formId").addEventListener("submit", (e) => {
  e.preventDefault();
  let postData = {
    firstName: firstInput,
    lastName: "Sharma",
    password: "123@KapilSharma",
    email: "kapil.sharma@netflix.com",
    phoneNumber: 939293232,
    profileName: "kapil.sharma",
  };
  fetch("http://localhost:5001/api/v1/user/createUser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });
});
let firstInput = "";
let searchId = "676f909fb764ce0d88393bf9";

document.getElementById("firstInput").addEventListener("input", (e) => {
  firstInput = e.target.value;
});

document.getElementById("fetchBtn").addEventListener("click", () => {
  fetch("http://localhost:5001/api/v1/user/getUser")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
});

document.getElementById("getUser").addEventListener("input", (e) => {
  searchId = e.target.value;
});

document.getElementById("formGetUser").addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(`http://localhost:5001/api/v1/user/getUser/${searchId}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
});
