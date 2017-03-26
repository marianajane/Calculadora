function agregarNumber(elemento){
          var historial1 = document.getElementById("resultado");
           historial1.value += elemento.getAttribute("value");
}

        function escribirResultado(elemento){
          var resultados= document.getElementById("resultado");
          resultados.value = eval(resultado.value);

    }