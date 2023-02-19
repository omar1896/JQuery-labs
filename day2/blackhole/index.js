

$(function(){

$("#dd").draggable({revert:true})
$("#dd").one("mouseover",function(){
    $("img").effect("shake")
  })

  $("#hole").droppable({drop :function(event,ui){
    console.log(this)
   // $("#dd").css("display","none")
    $("#dd").hide(2000)
  }
  })
})
  /** drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" ); */