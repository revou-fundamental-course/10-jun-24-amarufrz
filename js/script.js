function hapus(){
document.getElementById('suhuc').value='';
document.getElementById('suhuf').value='';
document.getElementById('formula').value='';
}



function konversi(){
    var result;
    var celcius = document.getElementById('suhuc').value;
    
        result=(parseFloat(celcius)*9/5)+32;

        document.getElementById('suhuf').value = parseFloat(result).toFixed(1) + '°F';
        document.getElementById('formula').value = '( ' + parseFloat(celcius) +  '°C * 9/5 )' + ' + 32 = ' + parseFloat(result).toFixed(1) + '°F';
}

function balik(){
    var result;
    var celcius = document.getElementById('suhuc').value;
    
        result=(parseFloat(celcius)*9/5)+32;

        document.getElementById('suhuf').value = parseFloat(result).toFixed(1)+'°F';
        document.getElementById('formula').value = '( ' + parseFloat(result)+ '°F - 32 )' + ' *5/9 = ' + parseFloat(celcius)+'°C';
}

    
    
