//đếm thời gian
function timer() {return "[" + (performance.now()/1000).toFixed(5) + "] ";}
//function để debug
function log(description,noTimer,style) {
    function a() {if (noTimer == 1) {return "";} else {return timer();}}
	function b() {if (style == undefined) {return "";} else {return style;}}
	console.log(a() + "%c" + description,b());
}
//¯\_(ツ)_/¯
log("Chào bạn! Nếu thấy hay thì đừng quên chia sẻ để troll bạn bè nhé :))",1,"font-size: 20px; font-weight: bold;");
log("Đang truy xuất dữ liệu phiên bản");
fetch('./data/versioninfo').then(response => response.text()).then(data => {
    if (data == "") {
        document.getElementById("version").textContent = "Lỗi";
        log("Đã xảy ra lỗi khi truy xuất dữ liệu phiên bản :(");
    } else {
        document.getElementById("version").textContent = data;
        log("Phiên bản: " + data);
    }
});