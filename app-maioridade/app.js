/**
 * Validação da maioridade
 * @author Vitor de Assis
 */

// função para validação de maioridade
function validar(event) {
    // A linha abaixo desabilita o comportamento padrão de envio do formulário
    event.preventDefault()

    // O alert geralmente é usado para validar o funcionamento das ações de um form ou button
    // alert("Teste de envio")

    let nome = document.getElementById('cnome').value
    let idade = document.getElementById('cidade').value
    //alert(nome)
    //console.log(nome)


    // Saída
    document.getElementById('caluno').value = `Aluno: ${nome}`

    if(idade < 18){
        document.getElementById('cstatus').value = "Menor de idade"
    } else{
        document.getElementById('cstatus').value = "Maior de idade"
    }
}