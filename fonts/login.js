$(document).ready(function(){
  const formulario=$('form');
  formulario.submit(function(error){
    if(error.isDefaultPrevented()){
      console.log('error');
    }
    else{
      console.log('correcto');
    }
    error.preventDefault();
    return false;

  });
})
function iniciar(){
  const email = $("#email").val();
  const pass = $("#pass").val();
  if((email && pass)!=""){
    console.log();
  }
  else {
    console.log('error');
  }
}
