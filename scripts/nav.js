/*
 * Navigation script for HiOSMobile
 * Handles:
 * 1. Bottom navigation bar icon switching and iframe loading
 * 2. Toolbar icon (popup menu) animation
 * 3. Toolbar page navigation
 *
 * MERGED: This file combines your original nav logic
 * with the new animation/toolbar functions.
 */

// --- 1. Bottom Navigation Bar Logic (Your Original Code) ---

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
                        // Find the label span and hide it
                        const label = item.querySelector('.mdc-bottom-navigation__label');
                        if (label) label.style.display = 'none';
                        
                        // Set icon to inactive
                        if (iconDiv.classList.contains('activeIcon')) {
                            iconDiv.className = 'inactiveIcon';
                        }
                }
        });

        //set clicked item to active
        const clickedIconDiv = clickedItem.querySelector('div');
        if (clickedIconDiv) {
                clickedIconDiv.className = 'activeIcon';
                // Find the label span and show it
                const label = clickedItem.querySelector('.mdc-bottom-navigation__label');
                if (label) label.style.display = 'block';
        }
}

//add event listeners to bottom nav items
document.addEventListener('DOMContentLoaded', function() {
        const navItems = document.querySelectorAll('.mdc-bottom-navigation__item');

        navItems.forEach(item => {
                item.addEventListener('click', function(event) {
                        event.preventDefault(); // Prevent default link behavior
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


// --- 2. Toolbar (Popup Menu) Logic (NEW Animated Version) ---

function showToolbaricon(id) {
    const dialog = document.getElementById(id);
    if (dialog) {
        // Use a class to trigger the CSS animation
        dialog.classList.add('visible');
    }
}

function hideToolbaricon(id) {
    const dialog = document.getElementById(id);
    if (dialog) {
        // Remove the class to reverse the CSS animation
        dialog.classList.remove('visible');
    }
}


// --- 3. Toolbar & General Page Navigation (NEW functions for popup buttons) ---

function toolbariconPage(url) {
    // Hide the toolbar before navigating
    hideToolbaricon('dialog');
    
    // Wait for the animation to finish, then navigate
    setTimeout(() => {
        window.location.href = url;
    }, 300); // 300ms matches the CSS transition
}

function link(url) {
    // Hide the toolbar before navigating
    hideToolbaricon('dialog');
    
    // Wait for the animation to finish, then navigate
    setTimeout(() => {
        const contentFrame = document.getElementById('content');
        if (contentFrame) {
            // Load the new page (e.g., settings) into the iframe
            contentFrame.src = url;
        } else {
            // Fallback if there's no iframe
            window.location.href = url;
        }
    }, 300);
}