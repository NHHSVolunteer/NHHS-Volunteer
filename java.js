const bar = document.getElementById("bar")
const close = document.getElementById("close")
const nav = document.getElementById("navbar")

if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.add("active");
        bar.style.display = 'none';  
        document.body.style.overflow = "hidden";
    });
}

if (close) {
    close.addEventListener("click", () => {
        nav.classList.remove("active");
        bar.style.display = 'block'; 
        document.body.style.overflow = ""
    });
}

function redirectToPage() {
    window.location.href = "oss.html";
}

document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });