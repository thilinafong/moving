$(function(){
//functions
function handleMousedown(ev){
  var $this=$(this);

  var evClientX=ev.clientX;
  var evClientY=ev.clientY;
  var eleClientX=$this.get(0).offsetLeft;
  var eleClientY=$this.get(0).offsetTop;

  var ev2eleX=evClientX-eleClientX;
  var ev2eleY=evClientY-eleClientY;

  $(document).on('mousemove',function(ev){
    var moveClientX=ev.clientX;
    var moveClientY=ev.clientY;

    $this.css({top:(moveClientY-ev2eleY),left:(moveClientX-ev2eleX)});
  });

  $(document).on('mouseup',function(ev){
    // $(document).off();
    $(document).off('mousemove');
    $(document).off('mouseup');
  });
  return false;
}
// =====================================================================
  $('.drag').on('mousedown',handleMousedown);
});
