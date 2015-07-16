$(document).ready(function () {
    var emailField = $("#email");
    if (emailField.is("input") && emailField.prop("type") === "email") {
    }
    function checkEmail(email) {
        pattern = new RegExp("[^ @]*@[^ @]*\.[a-zA-Z]{2,}");
        return pattern.test(email);
    }
    emailField.on("change", function (e) {
        emailField[0].checkValidity();
        if (!e.target.validity.valid) {
            $(this).removeClass("success").addClass("error")
        } else {
            $(this).removeClass("error").addClass("success")
        }
    });
    emailField.on("invalid", function(e) {
        e.target.setCustomValidity("");
        email = emailField.val();
        checkEmail(emailField);
        if (!e.target.validity.valid) {
            e.target.setCustomValidity("I need to see an email address here in the form of someone@email.com");
        }
        else {
            e.target.setCustomValidity("");
        }
    });
});
