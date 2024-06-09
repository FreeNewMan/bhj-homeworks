tabsNavigation = document.querySelectorAll('.tab');
tabsContent = document.querySelectorAll('.tab__content');

function selectTab() {
    tabsNavigation.forEach((tab) => {
        tab.classList.remove('tab_active')
    });

    tabsContent.forEach((tab) => {
        tab.classList.remove('tab__content_active')
    });

    this.classList.add('tab_active');

    tabsNavigation.forEach((tab, index) => {
        if (tab.classList.contains('tab_active')) {
            tabsContent[index].classList.add('tab__content_active');
        }
    });

}


tabsNavigation.forEach((tab) =>
    tab.addEventListener('click', selectTab)
);