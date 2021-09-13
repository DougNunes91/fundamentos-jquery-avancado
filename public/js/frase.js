$("#botao-frase").click(function() {
    $(".spinner").show();//sempre exibirá o spinner, omitindo-o quando chegar na funcao always
    $.get("http://localhost:3000/frases", trocaFraseAleatoria)
    //funcao fail é executacada em caso de erro/falha de requisicao
    .fail(function(){
        $(".error").show();
        setTimeout(function(){
            $(".error").hide();
        }, 1500);
    //always sempre será executado independente se for boa ou ruim a requisicao. Usamos-a para sempre ocultar o spinner(gif)
    }).always(function(){
        $(".spinner").hide();
    });
});

// o jquery sabe exatamente q o argumento data é o retorno da resposta do servidor
function trocaFraseAleatoria(data) {
    var frase = $(".frase");
    var numeroAleatorio = Math.floor(Math.random() * data.length);

    frase.text(data[numeroAleatorio].texto);
    atualizaTamanhoFrase();//Esta funcao será chamada para alterar o elemento do DOM, e nao do HTML originalmente
    atualizaTempoInicial(data[numeroAleatorio].tempo);
    inicializaMarcadores();
}

