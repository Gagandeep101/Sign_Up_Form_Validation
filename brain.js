var form_data = document.querySelector(".form");
var Sign_Up_btn = document.querySelector("#Sign_Up_btn");
Sign_Up_btn.addEventListener("click", function () {
    form_data.addEventListener("submit", (e) => {
        e.preventDefault();
        validate_form_data();
    })

})

function validate_form_data() {
    const first_name = document.getElementById("user_first_name");
    const last_name = document.getElementById("user_last_name");
    const phone_number = document.getElementById("user_phone_number");
    const password = document.getElementById("user_password");
    const confirm_password = document.getElementById("user_confirm_password");
    if (first_name.value === "" || last_name.value === "" || phone_number.value === "" || password.value === "" || confirm_password.value === "") {
        alert("All fields are required");
    } else {
        validate_user_name(first_name);
        validate_user_name(last_name);
        validate_user_phone_number(phone_number);
        validate_user_password(password, confirm_password);
    }
}

function validate_user_name(name) {
    if (name.value.length > 11) {
        alert(name.getAttribute("placeholder") + " must be less than 10 characters");
    }
    else if (!name.value.match(/^[A-Za-z]+$/)) {
        alert(name.getAttribute("placeholder") + " can only contain letters");
    }
    else {
        var info_img_1 = document.querySelector("#info_img_1");
        var info_img_2 = document.querySelector("#info_img_2");
        name.setAttribute("style", "border-top:4px solid  RGB(255 136 8); border-right:4px solid  RGB(255 136 8); border-bottom:4px solid  RGB(255 136 8);border-left: none;");
        info_img_1.setAttribute("style", "border-top:4px solid  RGB(255 136 8); border-left:4px solid  RGB(255 136 8); border-bottom:4px solid  RGB(255 136 8);border-right: none;");
        info_img_2.setAttribute("style", "border-top:4px solid  RGB(255 136 8); border-left:4px solid  RGB(255 136 8); border-bottom:4px solid  RGB(255 136 8);border-right: none;");
    }
}
function validate_user_phone_number(phone_number) {
    if (phone_number.value.length > 11) {
        alert(phone_number.getAttribute("placeholder") + " must be at most 10 characters");
    }
    else if (!phone_number.value.match(/^[0-9]+$/)) {
        alert(phone_number.getAttribute("placeholder") + " can only contain numbers");
    }
    else {
        phone_number.setAttribute("style", "border-top:4px solid  RGB(255 136 8); border-right:4px solid  RGB(255 136 8); border-bottom:4px solid  RGB(255 136 8);border-left: none;");
        var info_img_3=document.querySelector("#info_img_3");
        info_img_3.setAttribute("style", "border-top:4px solid  RGB(255 136 8); border-left:4px solid  RGB(255 136 8); border-bottom:4px solid  RGB(255 136 8);border-right: none;");
    }
}

function validate_user_password(password, confirm_password) {
    if (password.value.length < 8) {
        alert(password.getAttribute("placeholder") + " must be at least 8 characters");
    }
    else if (!password.value.match(/^[A-Za-z]\w{7,14}$/)) {
        alert(password.getAttribute("placeholder") + " must be contains only letters and numbers");
    }
    else if (password.value !== confirm_password.value) {
        alert("Passwords do not match . Please try again");
    }
    else {
        password.setAttribute("style", "border-top:4px solid  RGB(255 136 8); border-right:4px solid  RGB(255 136 8); border-bottom:4px solid  RGB(255 136 8);border-left: none;");
        confirm_password.setAttribute("style", "border-top:4px solid  RGB(255 136 8); border-right:4px solid  RGB(255 136 8); border-bottom:4px solid  RGB(255 136 8);border-left: none;");
        var info_img_4 = document.querySelector("#info_img_4");
        var info_img_5 = document.querySelector("#info_img_5");
        info_img_4.setAttribute("style", "border-top:4px solid  RGB(255 136 8); border-left:4px solid  RGB(255 136 8); border-bottom:4px solid  RGB(255 136 8);border-right: none;");
        info_img_5.setAttribute("style", "border-top:4px solid  RGB(255 136 8); border-left:4px solid  RGB(255 136 8); border-bottom:4px solid  RGB(255 136 8);border-right: none;");
    }
}