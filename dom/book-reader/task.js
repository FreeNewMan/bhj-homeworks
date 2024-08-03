const bookFontSizeCtrl = document.querySelectorAll('.font-size');
const bookContent = document.querySelectorAll('.book__content');
const bookColorCtrl = document.getElementsByClassName('book__control_color')[0].querySelectorAll('a');
const bookBgColorCtrl = document.getElementsByClassName('book__control_background')[0].querySelectorAll('a');

function selectFont(e) {
    e.preventDefault();
    bookFontSizeCtrl.forEach((sct) => {
        sct.classList.remove('font-size_active');
    });
    this.classList.add('font-size_active');

    const curSize = this.dataset.size;
    bookContent[0].classList.remove('book_fs-big', 'book_fs-small');
    if (curSize) {
        bookContent[0].classList.add(`book_fs-${curSize}`);
    }
}

function selectColor(e) {
    e.preventDefault();
    bookColorCtrl.forEach((sct) => {
        sct.classList.remove('color_active');
    });
    this.classList.add('color_active');

    const curColor = this.dataset.textColor;
    bookContent[0].classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke');
    if (curColor) {
        bookContent[0].classList.add(`book_color-${curColor}`);
    }
}

function selectBgColor(e) {
    e.preventDefault();
    bookBgColorCtrl.forEach((sct) => {
        sct.classList.remove('color_active');
    });
    this.classList.add('color_active');
    const curColor = this.dataset.bgColor;
    bookContent[0].classList.remove('book_bg-black', 'book_bg-gray', 'book_bg-white');
    if (curColor) {
        bookContent[0].classList.add(`book_bg-${curColor}`);
    }
}


bookFontSizeCtrl.forEach((fnt) =>
    fnt.addEventListener('click', selectFont)
);

bookColorCtrl.forEach((fnt) =>
    fnt.addEventListener('click', selectColor)
);

bookBgColorCtrl.forEach((fnt) =>
    fnt.addEventListener('click', selectBgColor)
);