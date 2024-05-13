async function register() {
  let id = document.getElementById("id");
  let email = document.getElementById("Email");
  let phone = document.getElementById("PNumber");
  let password = document.getElementById("password");

  console.log("here");

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: `{
      "email":"${email.value}",
      "phone": "${phone.value}",
      "id": "${id.value}",
      "password":"${password.value}"
    }`,
  };
  try {
    let res = await fetch(`http://localhost:3000/register`, options);
    if (res.ok) {
      localStorage.setItem("user", await res.text());
      location.href = `/profile/${
        JSON.parse(localStorage.getItem("user"))["id"]
      }`;
      // redirect to profile page.
    } else {
      alert("Invalid info. Try again.");
      location.reload();
    }
  } catch (e) {}
}
