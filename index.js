//Animations on load
const flightline = document.getElementById('flightline');
const ourRunway = document.getElementById('ourRunway');
const vaccOnly = document.getElementById('vaccOnly');
const vaccBackground = document.getElementById('vaccBackground');
const flOnly = document.getElementById('flOnly');
flightline.addEventListener('transitionend', () => {
    vaccOnly.style.opacity = 1;
    vaccBackground.style.transform = 'translate(64%, -90%)';
    vaccBackground.style.right = '50%';
    ourRunway.style.opacity = 1; 
    flOnly.style.left = 'max(30px, 4.5vh)';
    flOnly.style.top = 'max(10px, 1.5vh)';
});
flightline.style.opacity = 0;
const topContainer = document.getElementById('top');
const nav = document.getElementById('nav');
const navItems = document.querySelectorAll('.navItem');
const signIn = document.getElementById('signIn');
const downArrow = document.getElementById('downArrow');
const learnMore = document.getElementById('learnMore');
flOnly.addEventListener('transitionend', () => {
    //Lock #flightlineDream elements in place
    flOnly.style.top = '10px';
    flOnly.style.left = '30px';
    setTimeout(() => {flOnly.style.transition = 'none'}, 750); //Allows transition to final locked position
    vaccOnly.style.fontSize = '70px';
    document.getElementById('dream').style.fontSize = '27.7px';
    ourRunway.style.fontSize = '27.7px';
    //Transition #top
    topContainer.style.height = '75vh';
    topContainer.style.backgroundColor = 'rgba(0,0,0,0.2)';
    //After transition of #top
    setTimeout(() => {
        topContainer.style.transition = 'none'
        downArrow.style.opacity = 1;
        learnMore.style.opacity = 1;
    }, 750);
    //Transition #nav (has 0.25s delay)
    nav.style.transform = 'skew(20deg) translateX(0)';
    var delay = 0.2;
    navItems.forEach(item => {
        item.style.transition = `opacity 0.75s ease-in-out ${delay}s`;
        item.style.opacity = 1;
        delay+=0.2;
    });
    signIn.style.transition = `opacity 0.75s ease-in-out ${delay}s`
    signIn.style.opacity = 1;
});