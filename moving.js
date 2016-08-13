$(function(){
(function(){
  // vars
  var limitWidth=$('.mask_layer').width();
  var limitHeight=$('.mask_layer').height();
  var eleWidth=$('.drag').width();
  var eleHeight=$('.drag').height();

  var limitMaxX=limitWidth-eleWidth;
  var limitMaxY=limitHeight-eleHeight;
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

      var numSetLeft=moveClientX-ev2eleX;
      var numSetTop=moveClientY-ev2eleY;

      if(numSetLeft<0){
        numSetLeft=0;
      }else if(numSetLeft>limitMaxX){
        numSetLeft=limitMaxX
      }

      if(numSetTop<0){
        numSetTop=0;
      }else if(numSetTop>limitMaxY){
        numSetTop=limitMaxY
      }

      $this.css({left:numSetLeft,top:numSetTop});
    });

    $(document).on('mouseup',function(ev){
      // $(document).off();
      $(document).off('mousemove');
      $(document).off('mouseup');
    });
    return false;
  }
  // =====================================================================exec
  $('.drag').on('mousedown',handleMousedown);
})();
}); //end of ready
