const signup = document.getElementById("signup");
const logins = document.querySelectorAll(".login");

signup.onclick = (e) => {
    if (logins[0].value == "" || logins[1].value == "") {
        if (!signup.classList.contains("move-right") && !signup.classList.contains("move-left")) {
            signup.classList.remove("translate-middle-x")
            signup.classList.remove("start-50");
            signup.classList.add("move-right");
        } else if (signup.classList.contains("move-right")) {
            signup.classList.remove("move-right");
            signup.classList.add("move-left");
        } else if (signup.classList.contains("move-left")) {
            signup.classList.remove("move-left");
            signup.classList.add("move-right");
        }
    }else{
        window.location.href = "myschedule.html";
    }
};

