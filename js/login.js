$(document).ready(function(){
  const formulario=$('form');
  formulario.submit(function(error){
    $('#alerta').html('<div class="text-center">Cargando <span class="fa fa-spinner fa-pulse"><span></div>');
    if(error.isDefaultPrevented()){
      console.log('error');

    }

    else{
      iniciar();
    }
    error.preventDefault();
    return false;

  });
})
function iniciar(){
  const email = $("#email").val();
  const pass = $("#pass").val();
  const URL_API='http://spot.local/api/inicio';
  if((email && pass)!=""){
    console.log();
    $.ajax({
            url: URL_API,
            method:"POST",
            data:{'email':email,
                  'password':pass},
            success: function(data){
             $("#alerta").html(data.mensaje);
             if (data.session) {
               window.location.replace("PaginaLogin.html");
             }


           },
           error:function(errores){
             console.log(errores);
           }
         });
  }
  else {
    console.log('error');
  }
}
