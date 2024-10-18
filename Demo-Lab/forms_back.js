
function validateForm() {
    // Get values from the form
    var username = document.getElementById("username").value; 
    var password = document.getElementById("password").value;
    // Check if both fields are not empty
    if (username == "Admin" && password == "Admin@123"){
        alert("Welcome Super Admin");
    } 
    if (username !== "" && password !== "") {
        if (username.length >= 5 && password.length >= 8) {
            alert("Login successful!");}
        else {
            alert("Username should be at least 5 characters long, and password should be at least 8 characters long.");
        }}
    else {
        alert("Please enter both username and password.");
    }
}