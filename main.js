function obterMarcados(){
    // var letra = document.getElementById('cLe')
    // if(letra.type == 'checkbox' && letra.checked == true){
    //     alert('euuu')
    // }
}

let lista_letras = [
    'a', 'b', 'c', 'd', 'f', 'g', 'h', 'i', 'j', 'k', 'l,', 'm', 'n', 'o', 'p', 'q', 
    'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 
    'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'S' ];
let lista_esp = ['!', '@', '#', '$', '%', '&', '*']
    
let lista_num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20']


senha = []
lista_caract2 = []


function gerar(){
    var letra = document.getElementById('cLe');
    var num = document.getElementById('cNum');
    var espec = document.getElementById('cCar');
    var qtd = document.getElementById('cQtd').value;

    if(letra.type == 'checkbox' && letra.checked == true){
        lista_caract2.push(lista_letras)
    }
    if(espec.type == 'checkbox' && espec.checked == true){
        lista_caract2.push(lista_esp)
    }
    if(num.type == 'checkbox' && num.checked == true){
        lista_caract2.push(lista_num)
    }
    
    for(var x = 0; x < qtd; x++){
        let caracter_1 = lista_caract2[Math.floor(Math.random() * lista_caract2.length + 0)]
        if(caracter_1 == lista_letras){
            caracter_1 = lista_letras[Math.floor(Math.random() * 51 + 0)]
        }
        if(caracter_1 == lista_esp){
            caracter_1 = lista_esp[Math.floor(Math.random() * 6 + 0)]
        }
        if(caracter_1 == lista_num){
            caracter_1 = lista_num[Math.floor(Math.random() * 19 + 0)]
        }
        senha.push(caracter_1)
    }
    alert(senha.join(''))
}

console.log(lista_letras.length)