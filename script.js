/* Intro slider */
let slide = 0;
function nextSlide() {
  slide++;
  if (slide === 1) {
    document.getElementById("content").innerHTML =
      "<b>• Tailored Care for Every Individual</b> We understand unique needs. Our caregivers provide personalized services to make life easier and more comfortable";
    document.getElementById("dots").innerHTML = "○ ● ○";
  } else if (slide === 2) {
    document.getElementById("content").innerHTML =
      "<b>• Professional & Reliable Support</b> Every caregiver is trained and verified, so you can trust the quality and safety of the help you receive";
    document.getElementById("dots").innerHTML = "○ ○ ●";
    document.getElementById("btn").innerHTML = "Sign Up";
  } else {
    window.location.href = "signup.html";
  }
}

/* Common back navigation */
function goBack() {
  history.back();
}
