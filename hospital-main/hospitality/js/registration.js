//  == register ==
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});



// === both ===

document.addEventListener("DOMContentLoaded", function () {
  const signUpForm = document.querySelector(".sign-up-form");
  const signInForm = document.querySelector(".sign-in-form");

  // Redirect user if already logged in
  if (localStorage.getItem("loggedInUser")) {
      window.location.href = "profile.html";
  }

  // Registration Form Submission
  if (signUpForm) {
      signUpForm.addEventListener("submit", function (e) {
          e.preventDefault();

          const username = signUpForm.querySelector("input[placeholder='Username']").value.trim();
          const email = signUpForm.querySelector("input[placeholder='Email']").value.trim();
          const password = signUpForm.querySelector("input[placeholder='Password']").value.trim();
          const confirmPassword = signUpForm.querySelector("input[placeholder='Confirm Password']").value.trim();

          if (!username || !email || !password || !confirmPassword) {
              alert("⚠️ All fields are required!");
              return;
          }
          if (password !== confirmPassword) {
              alert("❌ Passwords do not match!");
              return;
          }

          const user = { username, email, password, profilePic: "" };
          localStorage.setItem("registeredUser", JSON.stringify(user));

          alert("✅ Registration successful! Redirecting to login...");
          setTimeout(() => {
              window.location.href = "profile.html"; // Redirect to profile page
          }, 1000);
      });
  }

  // Login Form Submission
  if (signInForm) {
      signInForm.addEventListener("submit", function (e) {
          e.preventDefault();

          const username = signInForm.querySelector("input[placeholder='Username']").value.trim();
          const password = signInForm.querySelector("input[placeholder='Password']").value.trim();
          const storedUser = JSON.parse(localStorage.getItem("registeredUser"));

          if (!storedUser || storedUser.username !== username || storedUser.password !== password) {
              alert("❌ Invalid username or password!");
              return;
          }

          localStorage.setItem("loggedInUser", JSON.stringify(storedUser));

          alert(`🎉 Welcome back, ${storedUser.username}! Redirecting...`);
          setTimeout(() => {
              window.location.href = "profile.html"; // Redirect to profile page
          }, 1000);
      });
  }
});













