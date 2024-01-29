// JavaScript to toggle the burger dropdown
document.addEventListener("DOMContentLoaded", function () {
    const burgerIcon = document.getElementById('burger-dropdown');
    const dropdownContent = document.getElementById('dropdown');
    const dropdown_class = document.getElementsByClassName('dropdown-content');
    function windowWidth(){
        if (window.innerWidth > 685) {
            dropdown_class[0].style.display = 'none';
        }
        else {
            dropdown_class[0].style.display = '';
        }
    }


    burgerIcon.addEventListener('click', function() {
        dropdownContent.classList.toggle('show');
    });

    // Close the dropdown if the user clicks outside of it
    window.addEventListener('click', function(event) {
        if (!event.target.matches('.b-dropdown')) {
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            }
        }
    });

    // Event listener for window resize to check and hide dropdown if width > 684px
    window.addEventListener('resize', windowWidth);
    window.addEventListener('load', windowWidth);
});


const btns = document.querySelectorAll('.buttons button');
const imgs = document.querySelectorAll('.images img');

for(let i = 1; i < btns.length; i++) {
    btns[i].addEventListener('click', filterImg);
}

function setActiveBtn(e) {
    btns.forEach(btn => {
        btn.classList.remove('btn-clicked');
    });

    e.target.classList.add('btn-clicked');
}

function filterImg(e){
    setActiveBtn(e);
    imgs.forEach(img => {
        img.classList.remove('img-shrink');
        img.classList.add('img-expand');
        console.log("hello");
        const imgType = parseInt(img.dataset.img);
        const btnType = parseInt(e.target.dataset.btn);

        if(imgType !== btnType) {
            img.classList.remove('img-expand');
            img.classList.add('img-shrink');
        }
    });
}

btns[0].addEventListener('click', (e) => {
    setActiveBtn(e);
    imgs.forEach(img => {
        img.classList.remove('img-shrink');
        img.classList.add('img-expand');
    })
});

// Initialize EmailJS with your User ID
emailjs.init("zqZp0UsslDdC3xJH2");

// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // generate a five digit number for the contact_number variable
    this.contact_number.value = Math.random() * 100000 | 0;
    // these IDs from the previous steps
    emailjs.sendForm('service_92asliy', 'template_r6my5w7', this)
        .then(function() {
            console.log('SUCCESS!');
        }, function(error) {
            console.log('FAILED...', error);
        });
});