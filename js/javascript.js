+function() {
	// Elementos
	var suma = document.getElementById("suma");
	var resta = document.getElementById("resta");
	var multiplicacion = document.getElementById("multiplicacion");
	var division = document.getElementById("division");
    
    // Función principal
    var operar = function (operacion) {
        var numeros = document.getElementByClass("numeros").value;
		var resultado = document.getElementById("resultado");
		resultado.textContent = operacion("numeros");
    };
    
	// Manejadores de Evento
	suma.addEventListener("click", function () {
        operar(sumar);
	});
	resta.addEventListener("click", function () {
        operar(restar);
	});
	multiplicacion.addEventListener("click", function () {
        operar(multiplicar);
	});
	division.addEventListener("click", function () {
        operar(dividir);
	});
}();