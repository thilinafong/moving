$(function(){
//functions
function handleMousedown(ev){
  var docPageX=ev.pageX;
  var docPageY=ev.pageY;
  var elePageX=$('.drag').offset().left;
  var elePageY=$('.drag').offset().top;

  var ev2eleX=Math.abs(docPageX-elePageX);
  var ev2eleY=Math.abs(docPageY-elePageY);

  $(document).on('mousemove',function(ev){
    var movePageX=ev.pageX;
    var movePageY=ev.pageY;
    $('.drag').css({top:(movePageY-ev2eleY),left:(movePageX-ev2eleX)});
  });

  $(document).on('mouseup',function(ev){
    $(document).off();
    // $(document).off('mousemove');
    // $(document).off('mouseup');
  });
}
// =====================================================================
  $('.drag').on('mousedown',handleMousedown);
});
