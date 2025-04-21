function loadIframe(url) {
        const iframe = document.getElementById('content');
        iframe.src = url;
}

//function to handle the active state of navigation items
function setActiveNavItem(clickedItem) {
        const navItems = document.querySelectorAll('.mdc-bottom-navigation__item');

        //remove active class from all items
        navItems.forEach(item => {
                const iconDiv = item.querySelector('div');
                if (iconDiv) {
                        iconDiv.className = 'inactiveIcon';
                }
        });

        //set clicked item to active
        const clickedIconDiv = clickedItem.querySelector('div');
        if (clickedIconDiv) {
                clickedIconDiv.className = 'activeIcon';
        }
}

//add event listeners to bottom nav items
document.addEventListener('DOMContentLoaded', function() {
        const navItems = document.querySelectorAll('.mdc-bottom-navigation__item');

        navItems.forEach(item => {
                item.addEventListener('click', function(event) {
                        const url = this.getAttribute('data-iframe-url');
                        if (url) {
                                loadIframe(url);
                        }
                        setActiveNavItem(this);
                });
        });

        const initialActiveItem = document.querySelector('.mdc-bottom-navigation__item[data-iframe-url="https://thehighlandcafe.github.io/hioswebcore/welcome.html"]');
        if (initialActiveItem) {
                setActiveNavItem(initialActiveItem);
        }
});

//Toolbaricon functions
        //Opening and closing
function showToolbaricon(dialog) {
        document.getElementById(dialog).style.display = "block";
}

function hideToolbaricon(dialog) {
        document.getElementById(dialog).style.display = "none";
}