more = document.querySelector("#more_img");

more.onclick= function(){
    navBar = document.querySelector(".header_nav");
    navBar.classList.toggle("active");
}

tel = document.getElementById("telephone");
mail = document.getElementById("email");
addres = document.getElementById("gps");

tel.onclick = function() {
    window.location.href = "tel:0776723943";
};

mail.onclick = function() {
    window.location.href = "mailto:TastyBytes@gmail.com";
};

addres.onclick = function() {
    var url = "https://www.google.com/maps/search/?api=1&query=35.690772,-0.64167";
    window.open(url, "_blank");
};
