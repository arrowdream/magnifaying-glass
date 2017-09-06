window.onload = function(){
      var objDemo = document.getElementById("demo");  
      objSmallBox = document.getElementById("smallBox"),
      objSmallPic = objSmallBox.getElementsByTagName("img")[0],
      objFloatBox = document.getElementById("floatBox"),
      objBigBox = document.getElementById("bigBox"),
      objBigPic = objBigBox.getElementsByTagName("img")[0],
      objMark = document.getElementById("mark"),
      objSSmallBox = document.getElementById("sSmallBox"),
      objSSmallPic = objSSmallBox.getElementsByTagName("img"),
      vmsrc = null,
      bsrc = null;

      for(var i=0,len=objSSmallPic.length;i<len;i++){
            objSSmallPic[i].onclick = function(){
                 var ssrc = this.src;
                 msrc = ssrc.substring(ssrc.lastIndexOf("/") + 2);
                 bsrc = ssrc.substring(ssrc.lastIndexOf("/") + 3);
                 objSmallPic.src = msrc;
                 objBigPic.src = bsrc;
            };
      }
      
      objMark.onmouseover = function(){
            objBigBox.style.display = "block";
            objFloatBox.style.display = "block";
      }
      objMark.onmouseout = function(){
            objBigBox.style.display = "none";
            objFloatBox.style.display = "none";
      }

      objMark.onmousemove = function(ev){
            var _event = ev || window.event;
            var left = _event.clientX - objDemo.offsetLeft - objMark.offsetLeft - objFloatBox.offsetWidth/2;
            var top = _event.clientY - objDemo.offsetTop - objMark.offsetLeft - objFloatBox.offsetWidth/2;

            if(left<0){
                  left = 0;
            }else if(left>(objMark.offsetWidth-objFloatBox.offsetWidth)){
                  left = objMark.offsetWidth-objFloatBox.offsetWidth;
            }
            if(top<0){
                  top = 0;
            }else if(top>(objMark.offsetHeight-objFloatBox.offsetHeight)){
                  top = objMark.offsetHeight-objFloatBox.offsetHeight;
            }

            objFloatBox.style.left = left + "px";
            objFloatBox.style.top = top + "px";

            objBigPic.style.left = -left*(objBigPic.offsetWidth - objBigBox.offsetWidth)/(objMark.offsetWidth-objFloatBox.offsetWidth) +"px";
            objBigPic.style.top = -top*(objBigPic.offsetHeight - objBigBox.offsetHeight)/(objMark.offsetHeight-objFloatBox.offsetHeight) +"px";

     }


}