// document.querySelector("h1").style.color = "red";
// document.querySelector("h1").style.fontWeight = "bold";
// si pulso el boton de enviar, recojo el nombre y la edad y la muestro en una ventana de alerta

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.querySelector("#exampleInputName").value;
    const age = document.querySelector("#exampleInputAge").value;
    alert(name + " es de " + age + " años");
});