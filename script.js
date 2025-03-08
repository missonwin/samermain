document.querySelector(".form").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.querySelector('input[type="text"]').value;
    let password = document.querySelector('input[type="password"]').value;

    if (username === "MAXHACK" && password === "MAX787898") {
        window.location.href = "https://gregarious-bavarois-dbca9a.netlify.app/"; // قم بتغيير الرابط إلى وجهتك
    } else {
        alert("Incorrect username or password!");
    }
});
