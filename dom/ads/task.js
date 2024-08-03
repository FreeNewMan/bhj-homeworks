rotators = document.querySelectorAll('.rotator');
const activeClass = 'rotator__case_active';





function rotate(rotator) {
    let findActiveFlag = 0;
    let rotatorCases = rotator.children;
    let nextElementIndex = 0;

    Array.from(rotatorCases).forEach( (rotatorCase, index ) => {
        if (findActiveFlag === 0 && rotatorCase.classList.contains(activeClass)) {
          rotatorCase.classList.remove(activeClass);
          nextElementIndex = index < rotatorCases.length - 1 ? index + 1 : 0; 
          rotatorCases[nextElementIndex].classList.add(activeClass);
          findActiveFlag = -1;
        }
    });

}


rotators.forEach( rotator => {
    setInterval(() => rotate(rotator), 1000);
  }
)
