
const text1 = "Hello guys!";
const text2 = "My name is Daniel, i'm  Front-End Developer. This is my portfolio and i want to show myself and show my projects.";

const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");

let i = 0;
let j = 0;

function typeLine1() {
  if (i < text1.length) {
    line1.innerHTML += text1[i];
    i++;
    setTimeout(typeLine1, 70);
  } else {
    setTimeout(typeLine2, 400); 
  }
}

function typeLine2() {
  if (j < text2.length) {
    line2.innerHTML += text2[j];
    j++;
    setTimeout(typeLine2, 35);
  }
}

typeLine1();

function sendMail(event) {
  event.preventDefault();

  let persinf = {
    name: document.getElementById("name").value,
    lastname: document.getElementById("lastname").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_sz0ybwp", "template_bv2hs9o", persinf)
    .then(
      () => {
        alert("Email sent");
      },
      (error) => {
        alert("Error");
        console.log(error);
      }
    );
}

