document.addEventListener('DOMContentLoaded', function() {
    class Toggle {
        constructor(control, el) {
            const toggleLink = document.querySelector('.primary-nav__toggle-icon');
            control = document.querySelector(control);
            el = document.querySelector(el);
            if(el) {
                control.addEventListener('click', function(e) {
                    if(el.dataset.expandContent == "false") {
                        el.setAttribute('data-expand-content', 'true');
                    } else {
                        el.setAttribute('data-expand-content', 'false');
                    }
                }, true)
            }   
        }
    }

    // new instances of class that get passed a control and a the element that gets toggled
    const menu = new Toggle('.primary-nav__toggle-icon', '.primary-nav__list');
});