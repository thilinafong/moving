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
  function drawDot(moveClientX,moveClientY){
    $('.mask_layer').append('<div class="dot" style="left:'+moveClientX+'px;top:'+moveClientY+'px;"></div>');
  }
  function handleMousedown(ev){
    var $this=$(this);

    var evClientX=ev.clientX;
    var evClientY=ev.clientY;
    // var eleClientX=$this.get(0).offsetLeft;
    // var eleClientY=$this.get(0).offsetTop;
    var eleClientX=$this.position().left;
    var eleClientY=$this.position().top;

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

      drawDot(moveClientX,moveClientY);
// $('.mask_layer').append('<div class="dot" style="left:'+moveClientX+'px;top:'+moveClientY+'px;"></div>');
      $this.css({left:numSetLeft,top:numSetTop});
    });

    $(document).on('mouseup',function(ev){
      // $(document).off();
      $(document).off('mousemove');
      $(document).off('mouseup');

      //松开鼠标做點什么
      // $this.animate({top:limitMaxY});
    });
    return false;
  }
  // =====================================================================exec
  $('.drag').on('mousedown',handleMousedown);
})();
}); //end of ready
