  
cuadros();
var opcion = prompt("introdusca un numero entre 20 y 100");
var colores=[];
var primos=[];

    let multiplo2 = document.getElementById("btn2");
    let multiplo3 = document.getElementById("btn3");
    let multiplo4 = document.getElementById("btn4");
    let multiplo5 = document.getElementById("btn5");
    let multiplo6 = document.getElementById("btn6");
    let multiplo7 = document.getElementById("btn7");
    let multiplo8 = document.getElementById("btn8");
    let multiplo9 = document.getElementById("btn9");
    let btnprimos = document.getElementById("btnprimos");
    let btnlimpiar = document.getElementById("btnlimpiar");

    function input(){
        

        if (opcion ==null || opcion=="") {
            alert("introduce un numero >:#");            
        }else if (opcion<20 || opcion>100) {
            alert("no esta dentro del rango");
        }else{
            for (let i = 1; i <= opcion; i++) {
                document.getElementById(i).style.background = '#ffffff';

            }
            for (let j = 100; j > opcion; j--) {
               document.getElementById(j).style.background = '#000000';               
            }
        }
    }
    input();
    function cuadros(){
        for (let i = 1; i <= 100; i++) {
            const button = document.createElement('button');
            button.type = 'button';
            button.innerText = i;
            button.setAttribute('id',i);
            button.style.height = "8%";
            button.style.width = "9%";
            button.style.marginRight = "5px"
            button.style.marginTop = "5px"
            button.style.background = "#ffffff";
            document.getElementById("botones").appendChild(button);
        }
    }

    multiplo2.onclick = function(){
        for (let j = 1; j <= opcion; j++) {
            if (j%2==0 && colores.includes(j)==false) {
                    document.getElementById(j).style.background = '#2a0000';
                    colores.push(j);              
            }           
        }
    }

    multiplo3.onclick = function(){
        for (let j = 1; j <= opcion; j++) {
            if (j%3==0 && colores.includes(j)==false) {
                document.getElementById(j).style.background = '#fff111';
                colores.push(j);   
            }           
        }
    }
    multiplo4.onclick = function(){
        for (let j = 1; j <= opcion; j++) {
            if (j%4==0 && colores.includes(j)==false) {
                document.getElementById(j).style.background = '#222eee';
                colores.push(j);   
            }           
        }
    }
    multiplo5.onclick = function(){
        for (let j = 1; j <= opcion; j++) {
            if (j%5==0 && colores.includes(j)==false) {
                document.getElementById(j).style.background = '#a5b2ff';
                colores.push(j);   
            }           
        }
    }
    multiplo6.onclick = function(){
        for (let j = 1; j <= opcion; j++) {
            if (j%6==0 && colores.includes(j)==false) {
                document.getElementById(j).style.background = '#ff00dd';
                colores.push(j);   
            }           
        }
    }
    multiplo7.onclick = function(){
        for (let j = 1; j <= opcion; j++) {
            if (j%7==0 && colores.includes(j)==false) {
                document.getElementById(j).style.background = '#def3ff';
                colores.push(j);   
            }           
        }
    }
    multiplo8.onclick = function(){
        for (let j = 1; j <= opcion; j++) {
            if (j%8==0 && colores.includes(j)==false) {
                document.getElementById(j).style.background = '#ff4c00';
                colores.push(j);
            }           
        }
    }
    multiplo9.onclick = function(){
        for (let j = 1; j <= opcion; j++) {
            if (j%9==0 && colores.includes(j)==false) {
                document.getElementById(j).style.background = '#ccc444';
                colores.push(j);   
            }           
        }
    }
    btnlimpiar.onclick = function(){
        for (let j = 1; j <= opcion; j++) {
            document.getElementById(j).style.background = '#ffffff';
            colores=[];            
        }
    }
    btnprimos.onclick = function(){
        var contador=0;
        for (let i = 2; i <= opcion ; i++) {
            for (let j = 2; j <= opcion; j++) {
                if (i%j==0) {
                    contador++;
                }
                
            }
            if(contador==1){
                contador=0;
                document.getElementById(i).style.background = '#f57b01';
                colores.push(i);
            }else if (contador>1) {
                contador=0;   
            }
             
            
        }
    }
