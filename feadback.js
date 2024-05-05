let form1 = document.querySelector("form");
let inp1 = document.querySelector("#inp1");
let email = document.querySelector("#email");
let inp = document.querySelector("#inp");
let p = document.querySelector(".err")

form1.addEventListener("submit", function (event) {
    event.preventDefault();
    if (inp1.value == "") {
        p.innerText = "Invalid name !";
        p.style.color = "red";
        setTimeout(() => {
            p.innerText = "";
        }, 3000);
    } else if (inp.value == "") {
        p.innerText = "Please write something !";
        p.style.color = "red";
        setTimeout(() => {
            p.innerText = "";
        }, 3000);
    } else {
        let input = document.querySelector("#inp1");
        let input2 = document.querySelector("#inp");
        let c = input.value;
        alert(`Thank you ${c} for give feadback. Your feadback will be to send of service user`);

        setTimeout(() => {
            input2.value = "";
            input.value = "";
            email.value = "";
        }, 200);
    }
});
