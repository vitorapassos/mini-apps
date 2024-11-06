/**
 * APP Flex V1
 * @author Vitor de Assis
 */

function calcular(event){
    //Para desabilitar a ação padrão de resetar a pagina
    event.preventDefault()
    console.log("Teste")
    let etanol = document.getElementById('ctxtEtanol').value
    let gasolina = document.getElementById('ctxtGasolina').value

    if(etanol < 0.7 * gasolina){
        document.getElementById('status').src="img/etanol.png"
    }else{
        document.getElementById('status').src="img/gasolina.png"
    }
}

function limpar(){
    document.getElementById('status').src="img/neutro.png"
}