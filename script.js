var menubut = document.getElementById("menubut")
var menu = document.getElementById("menu")

menubut.addEventListener("click", function(){
    if(menu.style.display === "block"){
        menu.style.display = "none"
    } else {
        menu.style.display = "block"
    }
})
