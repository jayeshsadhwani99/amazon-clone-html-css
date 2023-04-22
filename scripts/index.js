function backToTop() {
  window.scrollTo({ top: 0 });
}

// Made by and the copyright
const copyright = document.getElementById("copyright");
copyright.innerHTML = `&copy; Jayesh Sadhwani ${new Date().getFullYear()}`;
