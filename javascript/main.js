document.getElementById("verificar").onclick = function() {
    var num = parseInt(document.getElementById("num").value);
    var Divisores = 0;

    for (var i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            Divisores += i;
        }
    }

    document.getElementById("resultado").innerHTML = 
        Divisores === num ? "Es un número perfecto." : "No es un número perfecto.";
};