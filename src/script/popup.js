document.querySelector("#show-login").addEventListener("click", function() {
    document.querySelector(".popup").classList.add("active");
});

document.querySelector("#show-contacts").addEventListener("click", function() {
    document.querySelector(".contacts-popup").classList.add("active");
});

document.querySelectorAll(".popup .close-btn").forEach(function(btn) {
    btn.addEventListener("click", function() {
        document.querySelector(".popup").classList.remove("active");
    });
});

document.querySelectorAll(".contacts-popup .close-btn").forEach(function(btn) {
    btn.addEventListener("click", function() {
        document.querySelector(".contacts-popup").classList.remove("active");
    });
});
