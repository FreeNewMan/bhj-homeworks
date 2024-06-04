const killed = document.getElementById("dead");
const lost = document.getElementById("lost");

for (let index = 1; index < 10; index++) {
	const element = document.getElementById(`hole${index}`);
	element.onclick = function() {
		if (this.classList.contains('hole_has-mole')) {
			killed.textContent++;
		} else {
			lost.textContent++;
		}

		if (killed.textContent == 10) {
			alert('Победа!');
			killed.textContent = 0;
			lost.textContent = 0;
		};

		if (lost.textContent == 5) {
			alert('Вы проиграли!');
			killed.textContent = 0;
			lost.textContent = 0;
		};

	};
}