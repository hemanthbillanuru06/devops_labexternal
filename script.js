
function submitForm(e) {
    e.preventDefault();

    let n = document.getElementById('name').value.trim();
    let em = document.getElementById('email').value.trim();
    let phn = document.getElementById('phn').value.trim();
    let msg = document.getElementById('msg');

    msg.style.color = "red";

    if (!n)
        return msg.innerText = "Error: Enter valid name";

    if (!em.includes("@") || !em.includes("."))
        return msg.innerText = "Error: Enter valid email";

    if (phn.length !== 10 || isNaN(phn))
        return msg.innerText = "Error: Enter valid phone number";

    msg.style.color = "green";
    msg.innerHTML = "<b>Registration Successful!</b><br>Name:${n} thank you for registering!<br>";
}

function resetForm() {
    document.getElementById('msg').innerHTML = "";
}
