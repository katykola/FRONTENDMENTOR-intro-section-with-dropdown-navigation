const menuIcon = document.getElementById('iconMenu');
const menuIconClose = document.getElementById('iconClose');
const menuMobile = document.getElementById('menu');

const body = document.body;
const layer = document.createElement('div');
const features = document.getElementById('features');
const featuresMenu = document.getElementById('features-menu');
const featuresDiv = document.getElementById('featuresDiv');

const company = document.getElementById('company');
const companyMenu = document.getElementById('company-menu');
const companyDiv = document.getElementById('companyDiv');

//Menu for small and large resolution
document.addEventListener('DOMContentLoaded', function() {
    const menu = document.getElementById('menu');

    function applyMenuClass() {
        if (window.innerWidth <= 377) {
            menu.classList.add('menu-mobile');

            // Expand features menu on click
            features.addEventListener('click', function(){
               featuresMenu.classList.toggle('menu-small-expanded');
               featuresDiv.classList.toggle('menu-small-div-expanded');
            })
            // Expand company menu on click
            company.addEventListener('click', function(){
              companyMenu.classList.toggle('menu-small-expanded');
              companyDiv.classList.toggle('menu-small-div-expanded');
            })

        } else { // Large resolution menu
            menu.classList.remove('menu-mobile');
            
            // Expand features menu on mouseover and vise versa
            features.addEventListener('mouseover', function(){
                featuresMenu.classList.toggle('menu-small-expanded');
                featuresDiv.classList.toggle('menu-small-div-expanded');
            })
            features.addEventListener('mouseout', function(){
                featuresMenu.classList.toggle('menu-small-expanded');
                featuresDiv.classList.toggle('menu-small-div-expanded');
            })

            // Expand company menu on mouseover and vise versa
            company.addEventListener('mouseover', function(){
                companyMenu.classList.add('menu-small-expanded');
                companyDiv.classList.add('menu-small-div-expanded');
            })

            company.addEventListener('mouseout', function(){
                companyMenu.classList.remove('menu-small-expanded');
                companyDiv.classList.remove('menu-small-div-expanded');
            })
        }
    }

    // Apply the correct class on page load
    applyMenuClass();

    // Update the class when the window is resized
    window.addEventListener('resize', applyMenuClass);
});

// Set up the layer styling
layer.className = 'layer'; // Ensure this class has the desired styles in your CSS

menuIcon.addEventListener('click', function() {
    menuMobile.classList.add('menu-mobile-expanded');
    body.appendChild(layer);
    setTimeout(() => { layer.classList.add('layer-visible'); }, 10); // Slight delay to trigger transition
});

menuIconClose.addEventListener('click', function() {
    menuMobile.classList.remove('menu-mobile-expanded');
    layer.classList.remove('layer-visible');
    setTimeout(() => { 
        if (body.contains(layer)) {
            layer.remove(); 
        }
    }, 300); // Delay to match the transition time
});

