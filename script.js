document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const dayLogo = document.getElementById('dayLogo');
    const nightLogo = document.getElementById('nightLogo');

    function setDarkMode(isDark) {
        document.body.classList.toggle('dark-mode', isDark);
        themeToggle.src = isDark ? 'img/night-icon.png' : 'img/day-icon.png';
        dayLogo.classList.toggle('hidden', isDark);
        nightLogo.classList.toggle('hidden', !isDark);
        localStorage.setItem('darkMode', isDark);
    }

    // Verificar preferencia guardada o usar modo claro por defecto
    const savedTheme = localStorage.getItem('darkMode');
    setDarkMode(savedTheme === 'true');

    themeToggle.addEventListener('click', () => {
        setDarkMode(!document.body.classList.contains('dark-mode'));
    });
});
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((e1 , index)=> {
    e1.onclick = () =>{
        const pageTurnId = e1.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);


        if(pageTurn.classList.contains('turn')){
            pageTurn.classList.remove('turn');

            setTimeout(() => {
                pageTurn.style.zIndex =20 - index;
            }, 500)
        }
        else{
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500)
        }
    }
})


//Contact me buttone when click

const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.Contact-me');
contactMeBtn.onclick = () => {
    pages.forEach((page , index) => {
        setTimeout(() => {
            page.classList.add('turn');
            setTimeout(() => {
                page.style.zIndex = 20 + index;
            }, 500)
        },(index + 1) * 200 +100)
    })
}


// create reverse index function
let totalPages = pages.length;
let pageNumber = 0;
function reverseIndex(){
    pageNumber--;
    if(pageNumber < 0) {
        pageNumber = totalPages -1 ;

    } 
}

// back ProfileButton when click

const backProfileBtn = document.querySelector('.back-profile');
backProfileBtn.onclick = () => {
    pages.forEach((_, index) => {
        setTimeout(() =>{
            reverseIndex();
            pages[pageNumber].classList.remove('turn')

            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].style.zIndex = 10 + index;  
            }, 500)
        },(index + 1) * 200 +100)
    })
}

//opening animation
const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');

//opening animation (cover right animation)
setTimeout(() => {
    coverRight.classList.add('turn');
}, 2100)

setTimeout(() => {
    coverRight.style.zIndex= -1;
}, 2800)

//opening animation for left page or frofile page

setTimeout(() => {
    pageLeft.style.zIndex= 20;
}, 3200)

//opening animation (all page right animation)


    pages.forEach((_, index) => {
        setTimeout(() =>{
            reverseIndex();
            pages[pageNumber].classList.remove('turn')

            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].style.zIndex = 10 + index;  
            }, 500)
        },(index + 1) * 200 +2100)
    })


