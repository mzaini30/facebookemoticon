document.getElementsByClassName = function(clsName){
    var retVal = new Array();
    var elements = document.getElementsByTagName("*");
    for(var i = 0;i < elements.length;i++){
        if(elements[i].className.indexOf(" ") >= 0){
            var classes = elements[i].className.split(" ");
            for(var j = 0;j < classes.length;j++){
                if(classes[j] == clsName)
                    retVal.push(elements[i]);
            }
        }
        else if(elements[i].className == clsName)
            retVal.push(elements[i]);
    }
    return retVal;
}

function addSmiley(){
  var postBodyClass = (postBodyClass) ? postBodyClass : 'post-body';
  var d = document.getElementsByClassName(postBodyClass);
  for(var i=0;i<d.length;i++){
        d[i].innerHTML = d[i].innerHTML.replace(/\s:poop:/g, ' <img src="http://s18.postimg.org/zedlm3ndh/image.png" style="border:0; margin:0; padding:0;" id="new" /> ');
		d[i].innerHTML = d[i].innerHTML.replace(/\s:putnam:/g, ' <img src="http://s18.postimg.org/wybs895at/image.png" style="border:0; margin:0; padding:0;" id="new" /> ');
		d[i].innerHTML = d[i].innerHTML.replace(/\s:\)/g, ' <img src="http://s14.postimg.org/5ivq2dv5p/image.png" style="border:0; margin:0; padding:0;" id="new" /> ');
		d[i].innerHTML = d[i].innerHTML.replace(/\s:D/g, ' <img src="http://s24.postimg.org/z1y8krirl/image.png" style="border:0; margin:0; padding:0;" id="new" /> ');
		d[i].innerHTML = d[i].innerHTML.replace(/\s:\(/g, ' <img src="http://s3.postimg.org/flf0pdflb/image.png" style="border:0; margin:0; padding:0;" id="new" /> ');
		d[i].innerHTML = d[i].innerHTML.replace(/\s:\'\(/g, ' <img src="http://s9.postimg.org/bdw99j8uz/image.png" style="border:0; margin:0; padding:0;" id="new" /> ');
		d[i].innerHTML = d[i].innerHTML.replace(/\s:p/g, ' <img src="http://s16.postimg.org/6riof1ajl/image.png" style="border:0; margin:0; padding:0;" id="new" /> ');
		d[i].innerHTML = d[i].innerHTML.replace(/\s:P/g, ' <img src="http://s16.postimg.org/6riof1ajl/image.png" style="border:0; margin:0; padding:0;" id="new" /> ');
		d[i].innerHTML = d[i].innerHTML.replace(/\so:\)/g, ' <img src="http://s4.postimg.org/ermj19seh/image.png" style="border:0; margin:0; padding:0;" id="new" /> ');
		d[i].innerHTML = d[i].innerHTML.replace(/\sO:\)/g, ' <img src="http://s4.postimg.org/ermj19seh/image.png" style="border:0; margin:0; padding:0;" id="new" /> ');
		d[i].innerHTML = d[i].innerHTML.replace(/\s3:\)/g, ' <img src="http://s23.postimg.org/y764v5duv/image.png" style="border:0; margin:0; padding:0;" id="new" /> ');
		d[i].innerHTML = d[i].innerHTML.replace(/\so.O/g, ' <img src="http://s9.postimg.org/tblkr2xej/image.png" style="border:0; margin:0; padding:0;" id="new" /> ');
		d[i].innerHTML = d[i].innerHTML.replace(/\s;\)/g, ' <img src="http://s7.postimg.org/h8tasa41j/image.png" style="border:0; margin:0; padding:0;" id="new" /> ');
		d[i].innerHTML = d[i].innerHTML.replace(/\s:o/g, ' <img src="http://s14.postimg.org/45dqhxrlp/image.png" style="border:0; margin:0; padding:0;" id="new" /> ');
		d[i].innerHTML = d[i].innerHTML.replace(/\s:O/g, ' <img src="http://s14.postimg.org/45dqhxrlp/image.png" style="border:0; margin:0; padding:0;" id="new" /> ');
		d[i].innerHTML = d[i].innerHTML.replace(/\s-_-/g, ' <img src="http://s22.postimg.org/mfsiczfal/image.png" style="border:0; margin:0; padding:0;" id="new" /> ');
		d[i].innerHTML = d[i].innerHTML.replace(/\s--/g, ' <img src="http://s22.postimg.org/mfsiczfal/image.png" style="border:0; margin:0; padding:0;" id="new" /> ');
		d[i].innerHTML = d[i].innerHTML.replace(/\s&gt;:o/g, ' <img src="http://s16.postimg.org/gl4h5l21t/image.png" style="border:0; margin:0; padding:0;" id="new" /> ');
		d[i].innerHTML = d[i].innerHTML.replace(/\s&gt;:O/g, ' <img src="http://s16.postimg.org/gl4h5l21t/image.png" style="border:0; margin:0; padding:0;" id="new" /> ');
		d[i].innerHTML = d[i].innerHTML.replace(/\s:\*/g, ' <img src="http://s4.postimg.org/kz73sx2x5/image.png" style="border:0; margin:0; padding:0;" id="new" /> ');
		d[i].innerHTML = d[i].innerHTML.replace(/\s&lt;3/g, ' <img src="http://s30.postimg.org/73mveponh/image.png" style="border:0; margin:0; padding:0;" id="new" /> ');
		d[i].innerHTML = d[i].innerHTML.replace(/\s\^\^/g, ' <img src="http://s18.postimg.org/y9acp8m51/image.png" style="border:0; margin:0; padding:0;" id="new" /> ');
		d[i].innerHTML = d[i].innerHTML.replace(/\s8-\)/g, ' <img src="http://s11.postimg.org/nr18htmzj/image.png" style="border:0; margin:0; padding:0;" id="new" /> ');
		d[i].innerHTML = d[i].innerHTML.replace(/\s8\)/g, ' <img src="http://s11.postimg.org/nr18htmzj/image.png" style="border:0; margin:0; padding:0;" id="new" /> ');
		d[i].innerHTML = d[i].innerHTML.replace(/\sB-\)/g, ' <img src="http://s11.postimg.org/nr18htmzj/image.png" style="border:0; margin:0; padding:0;" id="new" /> ');
		d[i].innerHTML = d[i].innerHTML.replace(/\sB\)/g, ' <img src="http://s11.postimg.org/nr18htmzj/image.png" style="border:0; margin:0; padding:0;" id="new" /> ');
		d[i].innerHTML = d[i].innerHTML.replace(/\s8\|/g, ' <img src="http://s29.postimg.org/xgvqqpubn/image.png" style="border:0; margin:0; padding:0;" id="new" /> ');
		d[i].innerHTML = d[i].innerHTML.replace(/\s8-\|/g, ' <img src="http://s29.postimg.org/xgvqqpubn/image.png" style="border:0; margin:0; padding:0;" id="new" /> ');
		d[i].innerHTML = d[i].innerHTML.replace(/\sB\|/g, ' <img src="http://s29.postimg.org/xgvqqpubn/image.png" style="border:0; margin:0; padding:0;" id="new" /> ');
		d[i].innerHTML = d[i].innerHTML.replace(/\sB-\|/g, ' <img src="http://s29.postimg.org/xgvqqpubn/image.png" style="border:0; margin:0; padding:0;" id="new" /> ');
		d[i].innerHTML = d[i].innerHTML.replace(/\s\(\^\^\^\)/g, ' <img src="http://s24.postimg.org/3rt7gop8h/image.png" style="border:0; margin:0; padding:0;" id="new" /> ');
		d[i].innerHTML = d[i].innerHTML.replace(/\s:\|]/g, ' <img src="http://s4.postimg.org/76xab11jd/image.png" style="border:0; margin:0; padding:0;" id="new" /> ');
		d[i].innerHTML = d[i].innerHTML.replace(/\s&gt;.&lt;/g, ' <img src="http://s18.postimg.org/ynga2kvmd/image.png" style="border:0; margin:0; padding:0;" id="new" /> ');
		d[i].innerHTML = d[i].innerHTML.replace(/\s&gt;_&lt;/g, ' <img src="http://s18.postimg.org/ynga2kvmd/image.png" style="border:0; margin:0; padding:0;" id="new" /> ');
		d[i].innerHTML = d[i].innerHTML.replace(/\s&gt;&lt;/g, ' <img src="http://s18.postimg.org/ynga2kvmd/image.png" style="border:0; margin:0; padding:0;" id="new" /> ');
		d[i].innerHTML = d[i].innerHTML.replace(/\s&gt;:\(/g, ' <img src="http://s18.postimg.org/ynga2kvmd/image.png" style="border:0; margin:0; padding:0;" id="new" /> ');
		d[i].innerHTML = d[i].innerHTML.replace(/\s:v/g, ' <img src="http://s11.postimg.org/its9agae7/image.png" style="border:0; margin:0; padding:0;" id="new" /> ');
		d[i].innerHTML = d[i].innerHTML.replace(/\s:V/g, ' <img src="http://s11.postimg.org/its9agae7/image.png" style="border:0; margin:0; padding:0;" id="new" /> ');
		d[i].innerHTML = d[i].innerHTML.replace(/\s:3/g, ' <img src="http://s18.postimg.org/5ve3wudcl/image.png" style="border:0; margin:0; padding:0;" id="new" /> ');
		d[i].innerHTML = d[i].innerHTML.replace(/\s\(y\)/g, ' <img src="http://s11.postimg.org/h5t3vswin/image.png" style="border:0; margin:0; padding:0;" id="new" /> ');
		d[i].innerHTML = d[i].innerHTML.replace(/\s&lt;\("\)/g, ' <img src="http://s28.postimg.org/pxeqmjsvd/image.png" style="border:0; margin:0; padding:0;" id="new" /> ');
    }
}

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}

addLoadEvent(addSmiley);
