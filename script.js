function botao() {
    var respostaUser = document.querySelector('input[name="resposta1"]:checked');
    var respostaUser2 = document.querySelector('input[name="resposta2"]:checked');
    var respostaUser3 = document.querySelector('input[name="resposta3"]:checked');
    var respostaUser4 = document.querySelector('input[name="resposta4"]:checked');
    var respostaUser4 = document.querySelector('input[name="resposta5"]:checked');
    var respostaUser4 = document.querySelector('input[name="resposta6"]:checked');
    var respostaUser4 = document.querySelector('input[name="resposta7"]:checked');
    var respostaUser4 = document.querySelector('input[name="resposta8"]:checked');
    var respostaUser4 = document.querySelector('input[name="resposta9"]:checked');
    var respostaUser4 = document.querySelector('input[name="resposta10"]:checked');

    if (respostaUser && respostaUser2 && respostaUser3 && respostaUser4) {
        if (respostaUser.value == "correto") {
            document.getElementById("resposta1").innerHTML = "correto";
        }
        else {
            document.getElementById("resposta1").innerHTML = "errou";
        }

        if (respostaUser2.value == "correto") {
            document.getElementById("resposta2").innerHTML = "correto";
        }
        else {
            document.getElementById("resposta2").innerHTML = "errou";
        }

        if (respostaUser3.value == "correto") {
            document.getElementById("resposta3").innerHTML = "correto";
        }
        else {
            document.getElementById("resposta3").innerHTML = "errou";
        }

        if (respostaUser4.value == "correto") {
            document.getElementById("resposta4").innerHTML = "correto";
        }
        else {
            document.getElementById("resposta4").innerHTML = "errou";
        }

        if (respostaUser5.value == "correto") {
            document.getElementById("resposta5").innerHTML = "correto";
        }
        else {
            document.getElementById("resposta5").innerHTML = "errou";
        }

        if (respostaUser5.value == "correto") {
            document.getElementById("resposta6").innerHTML = "correto";
        }
        else {
            document.getElementById("resposta6").innerHTML = "errou";
        }

        if (respostaUser5.value == "correto") {
            document.getElementById("resposta7").innerHTML = "correto";
        }
        else {
            document.getElementById("resposta7").innerHTML = "errou";
        }

        if (respostaUser5.value == "correto") {
            document.getElementById("resposta8").innerHTML = "correto";
        }
        else {
            document.getElementById("resposta8").innerHTML = "errou";
        }

        if (respostaUser5.value == "correto") {
            document.getElementById("resposta9").innerHTML = "correto";
        }
        else {
            document.getElementById("resposta9").innerHTML = "errou";
        }

        if (respostaUser5.value == "correto") {
            document.getElementById("resposta10").innerHTML = "correto";
        }
        else {
            document.getElementById("resposta10").innerHTML = "errou";
        }


    } else {
        alert("Não deixar nenhuma questão em aberto");
    }

}
