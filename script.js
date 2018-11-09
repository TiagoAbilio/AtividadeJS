

function ExibirNome(){
    var nome = document.getElementById('nome').value;
    alert("Nome.: " + nome);
}

function ContarLetras() {
    var contador = document.getElementById('nome2').value;
    var numero = contador.length;
    if (numero <= 0){
        alert("Digite Um nome");
    }else{
        alert("O numero de Letras de " + contador + " = " + numero);
        }

}
   
function SomaNumeros(){
        var num1 = parseInt(document.getElementById('soma1').value,10);
        var num2 = parseInt(document.getElementById('soma2').value,10);
        document.getElementById('resultado').innerHTML = num1+num2;
    }

function Idade(){
    var ano = parseInt(document.getElementById('dataNascimento').value,10);
    document.getElementById('anos').innerHTML = "Voce Tem " + (2018-ano)+" Anos ";    
}

function CpfPonto(){
        var cpf  = document.getElementById('cpf').value;
        var cpfCom = " ";
        var cont=0;
        for(var indice = 0 ; indice < cpf.length ; indice ++){
            if(indice === 9){
                cpfCom+="-";
            }
            if(cont === 3 && indice <=8){
                cpfCom+=".";
                cont=0;
            }
            cpfCom+=cpf[indice];
            cont++;
            document.getElementById('recebercpfPonto').innerHTML = cpfCom;
        }
    }
    
function cpfSemponto(){
    var fpcsemponto = document.getElementById('cpfcomponto').value;
    var ponto = "";
    var cont=0;
    for(var indice =0; indice<fpcsemponto.length;indice++){
        if(fpcsemponto[indice] !== "." && fpcsemponto[indice]!== "-"){
            ponto+=fpcsemponto[indice];
        }
        
    }
    document.getElementById('cpfcom').innerHTML=ponto;
}

function GerarNumero(){
    
    document.getElementById('gerarnumero').innerHTML = Math.floor(Math.random()* 255);
}

var lampada = document.getElementById('lampada');
lampada.onclick = function (){
    if(lampada.src.match('lampadaAcesa.jpg')){
        lampada.src = 'lampadaApagada.jpg';
    }else{
        lampada.src = 'lampadaAcesa.jpg';
    }
};