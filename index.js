//Animations on load
const dream = document.getElementById('dream');
const flightline = document.getElementById('flightline');
const ourRunway = document.getElementById('ourRunway');
const vaccOnly = document.getElementById('vaccOnly');
const vaccBackground = document.getElementById('vaccBackground');
const flOnly = document.getElementById('flOnly');
dream.addEventListener('transitionend', () => {
    flOnly.style.opacity = 1;
    flightline.addEventListener('transitionend', () => {
        vaccOnly.style.opacity = 1;
        vaccBackground.style.transform = 'translate(64%, -90%)';
        vaccBackground.style.right = '50%';
        ourRunway.style.opacity = 1; 
        flOnly.style.left = '35px';
        flOnly.style.top = 'max(10px, 1.5vh)';
    });
    setTimeout(() => {
        flightline.style.opacity = 0;
        flightline.style.transition = 'opacity 0.75s ease-out';
    }, 50);
});
dream.style.opacity = 0.9;
dream.style.opacity = 1;
flightline.style.opacity = 1;
const topContainer = document.getElementById('top');
const nav = document.getElementById('nav');
const navItems = document.querySelectorAll('.navItem');
const signIn = document.getElementById('signIn');
const downArrow = document.getElementById('downArrow');
const learnMore = document.getElementById('learnMore');
const promoMessage = document.getElementById('promoMessage');
ourRunway.addEventListener('transitionend', () => {
    //Lock #flightlineDream elements in place
    flOnly.style.top = '10px';
    flOnly.style.left = '35px';
    vaccOnly.style.fontSize = '70px';
    vaccBackground.style.height = '68px';
    document.getElementById('flDreamLine1').style.height = '68px';
    document.getElementById('dream').style.fontSize = '27.7px';
    ourRunway.style.fontSize = '27.7px';
    setTimeout(() => {flOnly.style.transition = 'none'}, 750); //Allows transition to final locked position
    //Transition #top & #promoMessage 
    topContainer.style.height = '75vh';
    topContainer.style.animation = 'topAnimation 1s forwards ease-out';
    setTimeout(() => {topContainer.style.backgroundImage = 'url(media/plane.png)'}, 400);
    promoMessage.style.opacity = 1;
    //After transition of #top
    setTimeout(() => {
        //topContainer.style.transition = 'none';
        downArrow.style.opacity = 1;
        learnMore.style.opacity = 1;
    }, 1250);
    //Transition #nav (has 0.25s delay)
    nav.style.transform = 'skew(20deg) translateX(0)';
    var delay = 0.2;
    navItems.forEach(item => {
        item.style.transition = `opacity 0.75s ease-out ${delay}s`;
        item.style.opacity = 1;
        delay+=0.2;
    });
    signIn.style.transition = `opacity 0.75s ease-out ${delay}s`
    signIn.style.opacity = 1;
});