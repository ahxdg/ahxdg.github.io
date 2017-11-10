
var lock = false;
var turn = function () {
	var prize = [4,0,3,2,1,2,4,3];
	var self = this;
	this.elements = $('.turn-item');
	this.index = 0;
	this.status = 'pause';
	this.speed = 80;
	this.callBack = function () {};
	this.stop = function (res_prize, cbfun) {
		self.status = 'pause';
		self.res_prize = res_prize;
		self.stopTime = new Date().getTime();
		self.callBack = cbfun;
	}
	this.start = function () {
		if (self.status == 'play') {
			return false;
		}
		self.speed = 80;
		self.startTime = new Date().getTime();
		self.status = 'play';
		self.run();
	}
	this.run = function () {
		if (self.status == 'pause') {
			var newDate = new Date().getTime();
			if (newDate - self.startTime > 2000) {
				self.speed = self.speed + 40
			}
			if (newDate - self.startTime > 2600 && newDate - self.stopTime > 4000 && prize[self.index] == self.res_prize) {
				self.callBack();
				return false;
			}
		}else{
		}
		$(this.elements[this.index]).removeClass('act');
		if (this.index == 7) {
			this.index = 0;
		}else{
			this.index++;
		}
		$(this.elements[this.index]).addClass('act');
		setTimeout(function () {
			self.run();
		},self.speed);
	}
}

var a = new turn();
$('#turn-btn').on('click', function () {
	if (lock) {
		return false;
	}
	var $this = $(this);
	$this.addClass('touched');
	a.start();
	lock = true;
	setTimeout(function(){
		$this.removeClass('touched');
	},200);
	setTimeout(function () {
		a.stop(2,function () {
			lock = false;
		});
	},100);
});