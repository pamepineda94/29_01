$("#buscar").keypress(function(e) {
    if(e.which == 13) {
        const valor = $("#buscar").val();

        if (valor!='')
        {
          $.ajax({
                  url: "https://api.foursquare.com/v2/venues/search?v=20161016&ll=-0.180653,-78.467838&query="+valor+"&client_id=Q02QO1SI4E1M1X4VXYC1HCDXHQZJEPKI053DRSXD2UBS1HV5&client_secret=2KFMWRFQZDV22XNIRTD0URGL0QZN3DPQJTXCL2BWXPAAVEKK",
                  method:"GET",
                  success: function(data){
                   $("#lista").html('');
                   var html_val='';

                   $.each( data.response.venues, function(i,vector){


                     html_val+='<li class="mdl-list__item mdl-list__item--three-line"><span class="mdl-list__item-primary-content"><i class="material-icons mdl-list__item-avatar">person</i><span>'+vector.name+'</span><span class="mdl-list__item-text-body">'+vector.location.address+'<br>'+vector.location.crossStreet+'</span></span></li>';
                   });
                   $("ul").html(html_val);
                 },
                 error:function(errores){
                   console.log(errores);
                 }
               });
        }
        else {
          Materialize.toast('Complete el campo a buscar');
        }
    }
});
