var win = window;
var doc = win.document;
var baseWidth = 750;
var documentHTML = doc.documentElement;
//初始化网页根字体大小
function setRootFont() {
	var docWidth = documentHTML.getBoundingClientRect().width;
	var scale = docWidth / baseWidth;
	if (docWidth > 750) {
		if (UDevice=='web') {
			scale = 1;
			doc.body.style.width = '750px';
			doc.body.style.height = '100%';
		}
		doc.body.style.margin = '0 auto';
		doc.body.style.overflow = 'auto';
		//这里可以设置直接跳转到pc端页面
	}
	var p = scale * 100;
	//var p = docWidth / 10;
	documentHTML.style.fontSize = p + 'px';
}
setRootFont();
win.addEventListener('resize', setRootFont, false);
