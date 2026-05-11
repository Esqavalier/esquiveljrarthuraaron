function login(){

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Sample account
    if(username === "Esquivel" && password === "Paragon"){

        localStorage.setItem("loggedIn", "true");

        window.location.href = "dashboard.html";

    }else{
        document.getElementById("message").innerHTML =
        "Invalid Username or Password";
    }
}

function checkLogin(){

    if(localStorage.getItem("loggedIn") !== "true"){
        window.location.href = "index.html";
    }
}

function logout(){

    localStorage.removeItem("loggedIn");

    window.location.href = "index.html";
}