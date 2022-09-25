//Dark Mode
let theme = localStorage.getItem('theme');
const swichMode = document.querySelector('button');

swichMode.addEventListener('click', () => {
    if (theme == 'dark')
    {
        document.querySelector('body').classList.add('light');
        document.querySelector('body').classList.remove('dark');
        theme = 'light';
    } 
    else {
        document.querySelector('body').classList.remove('light');
        document.querySelector('body').classList.add('dark');
        theme = 'dark';
    }
    localStorage.setItem('theme', theme);
});

if (theme == 'dark') {
    document.querySelector('body').classList.add('light');
}

if (theme == 'light') {
    document.querySelector('body').classList.add('dark');
}

//Slider

let activeSlideNumber = 1;
let arrowLeft = document.querySelector('.arrow-left');
let arrowRight = document.querySelector('.arrow-right');

let dot1 = document.querySelector('#dot1');
let dot2 = document.querySelector('#dot2');
let dot3 = document.querySelector('#dot3');

let slide1 = document.querySelector('#slide1');
let slide2 = document.querySelector('#slide2');
let slide3 = document.querySelector('#slide3');
let slide4 = document.querySelector('#slide4');
let slide5 = document.querySelector('#slide5');
let slide6 = document.querySelector('#slide6');
let slide8 = document.querySelector('#slide8');
let slide9 = document.querySelector('#slide9');
let slide10 = document.querySelector('#slide10');
let slide11 = document.querySelector('#slide11');
let slide12 = document.querySelector('#slide12');
let slide13 = document.querySelector('#slide13');
let slide14 = document.querySelector('#slide14');
let slide15 = document.querySelector('#slide15');
let slide16 = document.querySelector('#slide16');
let slide17 = document.querySelector('#slide17');
let slide18 = document.querySelector('#slide18');
let slide19 = document.querySelector('#slide19');
let slide20 = document.querySelector('#slide20');

let hideActiveSlide = () => {
    let activeSlide = document.querySelector('.active');
    activeSlide.classList.remove('active');
};

let showSlide = (slideNumber) => {
    hideActiveSlide();
    document.querySelector('#slide'+slideNumber).classList.add('active');
};

let showNextSlide = () => {
    if (activeSlideNumber == 19)
    {
        activeSlideNumber = 1;
    }else {
        activeSlideNumber = activeSlideNumber + 1;
    };
    showSlide(activeSlideNumber);
};

let showPreviousSlide = () => {
    if (activeSlideNumber == 1)
    {
        activeSlideNumber = 19;
    }else {
        activeSlideNumber = activeSlideNumber - 1;
    };
    showSlide(activeSlideNumber);
};

let showSlide1 = () => {
    showSlide(1);
};

let showSlide2 = () => {
    showSlide(2);
};
let showSlide3 = () => {
    showSlide(3);
};

let showSlide4 = () => {
    showSlide(4);
};

let showSlide5 = () => {
    showSlide(5);
};
let showSlide6 = () => {
    showSlide(6);
};

let showSlide8 = () => {
    showSlide(8);
};
let showSlide9 = () => {
    showSlide(9);
};

let showSlide10 = () => {
    showSlide(10);
};

let showSlide11 = () => {
    showSlide(11);
};
let showSlide12 = () => {
    showSlide(12);
};

let showSlide13 = () => {
    showSlide(13);
};

let showSlide14 = () => {
    showSlide(14);
};
let showSlide15 = () => {
    showSlide(15);
};

let showSlide16 = () => {
    showSlide(16);
};
let showSlide17 = () => {
    showSlide(17);
};

let showSlide18 = () => {
    showSlide(18);
};

let showSlide19 = () => {
    showSlide(19);
};
let showSlide20 = () => {
    showSlide(20);
};


arrowLeft.addEventListener('click', showPreviousSlide);
arrowRight.addEventListener('click', showNextSlide);