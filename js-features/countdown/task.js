const secTimer = function() {
	const output = document.getElementById("timer");
	let timerValue = Number(output.textContent);
	if (timerValue === 0) {
		alert('Вы победили в конкурсе!');
		clearInterval(intervalId);
		return;
	}
	output.textContent--;

}
const intervalId = setInterval(secTimer, 1000);