function limpiar(){
    document.getElementById('miFormulario').reset(); 
}

function sumar(){
    var num1 = parseInt(document.getElementById('n1').value);
    var num2 = parseInt(document.getElementById('n2').value);
    resultado=num1+num2;
    document.getElementById("el-resultado").textContent=resultado; 
}

function restar(){
    var num1=parseInt(document.getElementById('n1').value);
    var num2=parseInt(document.getElementById('n2').value);
    document.getElementById('el-resultado').textContent=num1-num2; 
}

function multiplicar(){
    var num1=parseInt(document.getElementById('n1').value);
    var num2=parseInt(document.getElementById('n2').value);
    document.getElementById('el-resultado').textContent=num1*num2; 
}

function dividir(){
    var num1=parseInt(document.getElementById('n1').value);
    var num2=parseInt(document.getElementById('n2').value);
    document.getElementById('el-resultado').textContent=num1/num2; 
}