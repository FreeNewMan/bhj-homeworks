const element = document.getElementById("cookie");
const countClicks = document.getElementById("clicker__counter");
const speedClicks = document.getElementById("click__speed");
let paramClick = 0;
let lastTime = (new Date()).getTime() / 1000;
element.onclick = function() {
	countClicks.textContent++;
	let curTime = (new Date()).getTime() / 1000;
	speedClicks.textContent = (1 / (curTime - lastTime)).toFixed(2);
	lastTime = curTime;
	switch (paramClick) {
		case 0:
			element.width -= 5;
			element.height -= 5;
			paramClick = 1;
			break;
		case 1:
			element.width += 5;
			element.height += 5;
			paramClick = 0;
			break;
	};

};