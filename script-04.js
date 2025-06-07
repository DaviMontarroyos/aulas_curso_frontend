function media(){
  var a = parseFloat(document.getElementById('valor01').value);
  var b = parseFloat(document.getElementById('valor02').value);
  var m = (a+b)/2;

  if(m == 10){
    document.getElementById('demo').innerHTML = "Média = "+ m.toString() + "(Aprovado com Distinção)";
  } else if (m>=7) {
    document.getElementById('demo').innerHTML = "Média = "+ m.toString() + "(Aprovado)";
  }else{
    document.getElementById('demo').innerHTML = "Média = "+ m.toString() + "(Reprovado)";
  }

}