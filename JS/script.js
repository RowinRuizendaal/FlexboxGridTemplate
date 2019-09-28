function idleLogout() {
    var t;
    window.onload = resetTimer;
    window.onmousemove = resetTimer;
    window.onmousedown = resetTimer;  // catches touchscreen presses as well      
    window.ontouchstart = resetTimer; // catches touchscreen swipes as well 
    window.onclick = resetTimer;      // catches touchpad clicks as well
    window.onkeypress = resetTimer;   
    window.addEventListener('scroll', resetTimer, true); // improved; see comments

    function Redirect() {
        window.location.href = 'index.html';
    }

    function resetTimer() {
        clearTimeout(t);
        t = setTimeout(Redirect, 100000);  // time is in milliseconds
    }
}
idleLogout();




console.log('Zo te zien heb je verstand van Javascript? waarom kom je niet bij ons werken')