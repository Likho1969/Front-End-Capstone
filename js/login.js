// Likho Kapesi
//  Classroom 2

function login() {
  username = document.querySelector('#username').value
  password = document.querySelector('#password').value
  console.log(username);
  console.log(password);
    fetch("https://dynamicoakfx.herokuapp.com/auth", {
        method: "POST",
        body: JSON.stringify({
          username: `${username}`,
          password: `${password}`,
        }),
        headers: {
          "Content-Type": "application/json",
        },
    })
    .then((res) => res.json())
    .then((data) => {
      if (data["access_token"]) {
        fetch("https://dynamicoakfx.herokuapp.com/login/", {
          method: "POST",
          body: JSON.stringify({
            username: `${username}`,
            password: `${password}`,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
        console.log(data);
        storage = window.localStorage;
        storage.setItem("jwt-token", data["access_token"]);
        storage.setItem("username", username);
        storage.setItem("password", password);
        window.location.href = "/home.html";
      }
    });
}

document.querySelector('.loginform').addEventListener('submit', (e) => {
  e.preventDefault()
  login()
})

function regitser() {
  let name = document.querySelector('.namebox1').value
  let surname = document.querySelector('.namebox2').value
  let email = document.querySelector('.mobilepw').value
  let username = document.querySelector('.namebox3').value
  let password = document.querySelector('.mobilepw2').value
  fetch("https://dynamicoakfx.herokuapp.com/registration/", {
    method: "POST",
    body: JSON.stringify({
      name: `${name}`,
      surname: `${surname}`,
      email: `${email}`,
      username: `${username}`,
      password: `${password}`,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    let user = {name: name, surname: surname, email: email, username: username, password: password}
    console.log(user)
    storage = window.localStorage;
    storage.setItem("user", JSON.stringify(user))
    window.alert("Congratulations! You have successfully created an account.");
  });
}

document.querySelector('.signupform').addEventListener('submit', (e) => {
  e.preventDefault()
  regitser()
})

// function loginToggle() {
  // let login = document.querySelector('#login')
  // let regitser = document.querySelector('#subscribe')
  // login.classList.toggle("active");
  // regitser.classList.toggle("active");
  // if (regitser.classList.contains("active")) {
    // login.classList.add("hide");
  // } else {
    // regitser.classList.add("hide");
  // }
// }
