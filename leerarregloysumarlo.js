let c=0;
   var tamaño = prompt("indica el tamaño del arreglo");
    size=parseInt(tamaño);
    array=[];
        for( var i=0; i<size ;i++){
            var num = prompt("indica el numero en la posicion "+i);
            c=parseInt(num);
            array[i]=c;
        }
    function sum(data) {
        c=0;
        for( var i=0; i<data.length ;i++){
            c= c+data[i];
        }
        alert('la suma de los números del arreglo es :'+c);
        return c; 
       }
    sum(array)
  