$(document).ready(function(){
  iniciar();
  })
function iniciar(){
  const URL= 'http://spot.local/';
  const URL_API=URL+'api/ea';
  const divMod= '#lista';
  $(divMod).html('<div class="text-center">Cargando <span class="fa fa-spinner fa-pulse"><span></div>');
    console.log();
    $.ajax({
            url: URL_API,
            method:"GET",
            success: function(data){

              var html_val='';

              $.each( data, function(i,vector){
                html_val+='<li class="mdl-list__item mdl-list__item--three-line"><span class="mdl-list__item-primary-content"><img class="mdl-list__item-avatar" src="'+URL+'images/estadosAnimo/'+vector.id_+'.jpg"/><span>'+vector.desc_+'</span></li>';
              });
              $("ul").html(html_val);

           },
           error:function(errores){
             console.log(errores);
           }
         });

}
