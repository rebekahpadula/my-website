class Toggle {
    constructor(control, el) {
        control = document.querySelector(control);
        el = document.querySelector(el);
        const icon = document.querySelector('.page-header__icon');
        if(el) {
            control.addEventListener('click', function(e) {
                if(el.dataset.expandContent == "false") {
                    el.setAttribute('data-expand-content', 'true');
                    icon.setAttribute('src', '../assets/close.svg');
                } else {
                    el.setAttribute('data-expand-content', 'false');
                    icon.setAttribute('src', '../assets/menu-button.svg');
                }
            }, true)
        }   
    }
}

// new instances of class that get passed a control and a the element that gets toggled
const menu = new Toggle('.page-header__content-control', '.primary-nav__list');