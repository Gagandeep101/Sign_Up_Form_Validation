var form_data = document.querySelector(".form");
var Sign_Up_btn = document.querySelector("#Sign_Up_btn");
Sign_Up_btn.addEventListener("click", function () {
    form_data.addEventListener("submit", (e) => {
        e.preventDefault();
        validate_form_data();
    })

})

