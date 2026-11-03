
document.getElementById("contactForm")
.addEventListener("submit", function(event) {

  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  document.getElementById("status").textContent =
    "Thank you " + name + "! Your enquiry is ready.";

  console.log({
    name: name,
    email: email,
    message: message
  });

});
