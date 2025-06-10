const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const username = document.getElementById("username");
const errors = document.getElementById("errors");
const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", function(event) 
{
    let errorsMsg = "";

    if (username.value.length < 3) 
    {
        errorsMsg += '<span style="color:red;">Username must be at least 3 characters long.</span><br>';
    }

    if (username.value.length > 20) 
    {
        errorsMsg += '<span style="color:red;">Username must be at most 20 characters long.</span><br>';
    }

    if (password.value !== confirmPassword.value) 
    {
        errorsMsg += '<span style="color:red;">Passwords do not match.</span><br>';
    }

    if (password.value.length < 6)
    {
        errorsMsg += '<span style="color:red;">Password must be at least 6 characters long.</span><br>';
    }

    if (password.value.length > 30)
    {
        errorsMsg += '<span style="color:red;">Password must be at most 20 characters long.</span><br>';
    }


    if (errorsMsg !== "") 
    {
        event.preventDefault();
        errors.innerHTML = errorsMsg;
    }
});
