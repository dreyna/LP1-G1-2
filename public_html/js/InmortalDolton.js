var x1 = document.getElementById('x1');
var x2 = document.getElementById('x2');
var x3 = document.getElementById('x3');
var caja = document.getElementById('n');
function mostrar(x){
    switch (x){
        case '1':   x1.style.display = 'block';
                    x2.style.display = 'none';
                    x3.style.display = 'none';
                    caja.value ='1';
                    break;
        case '2':   x1.style.display = 'none';
                    x2.style.display = 'block';
                    x3.style.display = 'none';
                    break;
        case '3':   x1.style.display = 'none';
                    x2.style.display = 'none';
                    x3.style.display = 'block';
                    break;                
    }
}


$('#mostrar-Menu').on('click',function()
{
 $('nav').toggleClass('mostrar');  
})


