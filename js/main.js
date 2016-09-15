/**
 * 
 * @authors SunLianLong (https://github.com/sunlianlong/)
 * @date    2016-09-10 18:26:23
 * @version $1.0.1$
 */

// 用于手机rem布局，设计稿640
(function (doc, win) {
	var docEl = doc.documentElement,	
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		recalc = function () {
			// location.reload();
			var clientWidth = docEl.clientWidth;
			if (!clientWidth) return;			
			docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
		};
	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

$(function() {
  // 图片裁切上传
        // base64转为ArrayBuffer对象
        function _base64ToArrayBuffer(base64) {
          var binary_string =  window.atob(base64.split(",")[1]);
          var len = binary_string.length;
          var bytes = new Uint8Array( len );
          for (var i = 0; i < len; i++)        {
              bytes[i] = binary_string.charCodeAt(i);
          }
          return bytes.buffer;
        };
  $("#clipArea").photoClip({
    width: 200,
    height: 200,
    file: "#images",
    view: "#view",
    ok: "#clipbtn",
    loadStart: function() {
      var fontSize = $("html").css("fontSize");
      $("#clipArea").css({
        "height":$(document).height() - 0.9*parseInt(fontSize),
        "font-size":0
      });
      $("#toload").css("display","block");

    },
    loadComplete: function(){
      $("#showEdit").css("display","block");
      $("#toload").css("display","none");
    },
    clipFinish: function(dataURL) {
      $("#showEdit").css("display","none");
      $(".showimg").find("img").attr("src",dataURL);
      // var f = document.getElementById("images").files[0]; 
      // var r = new FileReader();
      // r.onloadend = function(e){
      // var data = _base64ToArrayBuffer(dataURL);
      // 这个是上传到服务器上的数据格式：Uint8Array对象
      // var arrimg = new Uint8Array(data);
      //   $.ajax({
      //     url: "",
      //     type: "post",
      //     dataType: "json",
      //     responseType: "arraybuffer",
      //     transformRequest: [],
      //     data: arrimg,
      //     processData: false,
      //     headers: {'Content-Type': 'application/octet-stream'},
      //     success: function(res) {
      			// 返回一个图片的url路径
      //     	console.log(res);
            
      //     },
      //     error:function(XMLHttpRequest, textStatus, errorThrown){
      //       console.log(textStatus);
      //     }
      //   })

     
      // };
      // r.readAsArrayBuffer(f);
    $("#image").val("");
    }
  });
  $("#cancleBtn").on("click",function(){
    $("#showEdit").css("display","none");
    $("#image").val("");
  });
});