const form = document.querySelector("#form2");
const btnSubmit = document.querySelector("#btnSubmit");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const name = document.getElementById("name");
  const files = document.getElementById("files");
  const formData = new FormData();
  formData.append("name", name.value);
  // FOR FILES
  for (let i = 0; i < files.files.length; i++) {
    formData.append("files", files.files[i]);
  }
  try {
    const response = await fetch("/api/v1/products/uploadImage", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    console.log({ formData });
    console.log({ data });
  } catch (error) {
    console.log({ error });
  }
});

// AUTH
const formDataAuth = {
  email: "jordan100@mail.com",
  password: "secret",
};
const btnLogin = document.getElementById("login");
const submitHandler = async (route) => {
  try {
    const response = await fetch("/api/v1/auth/" + route, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDataAuth),
    });
    const data = await response.json();
    console.log({ data });
  } catch (error) {
    console.log({ error });
  }
};

btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  submitHandler("login");
  console.log("fired");
});
