var menubut = document.getElementById("menubut")
var menu = document.getElementById("menu")
var filtros = document.getElementById("filtros")

menubut.addEventListener("click", function(){
    if(menu.style.display === "block"){
        menu.style.display = "none"
    } else {
        menu.style.display = "block"
    }
})

menubut.addEventListener("click", function(){
    if(filtros.style.display === "none"){
        filtros.style.display = "block"
    } else {
        filtros.style.display = "none"
    }
})