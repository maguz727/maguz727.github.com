
// DOM Document Object Model
/*
let links = document.querySelectorAll("a");

links.forEach(function(link)
{
    console.log(link)
})
*/

/* 
let cells = document.querySelectorAll("td");

cells.forEach(function(td)
{
   td.addEventListener("click", function()
   {
       console.log(this);
   })
})
*/

// Obtener los elementos de la clase .close

let links = document.querySelectorAll(".close")

// Recorrerlos

links.forEach(function(link)
{
    // Agregar un evento click a cada uno de ellos
    link.addEventListener("click", function(ev)
    {
        ev.preventDefault();
        let content = document.querySelector(".content");

        // Quitarle las clases de animación que ya tiene
        content.classList.remove("animate__fadeInDown");
        content.classList.remove("animate__animated");

        // Agregar clases para animar su salida
        content.classList.add("animate__fadeOutUp");
        content.classList.add("animate__animated");

        setTimeout(function()
        {
            location.href = "/";
        }, 800);
    })
})


