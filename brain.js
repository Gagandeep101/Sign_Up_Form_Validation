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

