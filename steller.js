/*!
=========================================================
* Steller Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
	$(".nav-link").on('click', function(event) {

    	if (this.hash !== "") {

			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, function(){
				window.location.hash = hash;
			});
      	} 
    });
});

const scrollWrapper = document.querySelector('.scrolling-wrapper');
const leftArrow = document.querySelector('.scroll-left');
const rightArrow = document.querySelector('.scroll-right');

leftArrow.addEventListener('click', () => {
    scrollWrapper.scrollBy({
        left: -scrollWrapper.clientWidth,
        behavior: 'smooth'
    });
});

rightArrow.addEventListener('click', () => {
    scrollWrapper.scrollBy({
        left: scrollWrapper.clientWidth,
        behavior: 'smooth'
    });
});


// JavaScript for Modal functionality
const modal = document.getElementById("projectModal");
const closeModal = document.querySelector(".modal .close");

// Open modal when project card is clicked
document.querySelector('[data-project="project1"]').addEventListener('click', () => {
    modal.style.display = "block";
});

// Close modal when 'x' is clicked
closeModal.addEventListener('click', () => {
    modal.style.display = "none";
});

// Close modal when clicking outside of modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});


function toggleText(moreId, lessId) {
    var moreText = document.getElementById(moreId);
    var lessText = document.getElementById(lessId);
    if (moreText.style.display === "none") {
        moreText.style.display = "block";
        lessText.style.display = "none";
    } else {
        moreText.style.display = "none";
        lessText.style.display = "block";
    }
}

