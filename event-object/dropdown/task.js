const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownLinks = document.querySelectorAll('.dropdown__link');


function fclick() {
    dropdownList.classList.toggle('dropdown__list_active');
}

dropdownValue.addEventListener('click', fclick);


function selectValue(e) {
    e.preventDefault();
    fclick();
    dropdownValue.textContent = this.textContent;
}

dropdownLinks.forEach((link) =>
    link.addEventListener('click', selectValue)
)