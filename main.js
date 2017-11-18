(function() {
    // get window heights and widths
    var w=window,
        d=document,
        e=d.documentElement,
        g=d.getElementsByTagName('body')[0],
        windowWidth=w.innerWidth||e.clientWidth||g.clientWidth,
        windowHeight=w.innerHeight||e.clientHeight||g.clientHeight;


    // declare elements
    var logoFrame = document.getElementById('logo-frame');
    var fuzzy = document.getElementById('fuzzy');
    var fuzzyText = document.getElementById('fuzzy-text')
    var fuzzyImage = document.getElementById('fuzzy-image')

    // On Load
    window.onload = function() {
        // fade in opacity
        logoFrame.style.opacity = 1
    }

    // Scroll Section
    window.onscroll = function() {
        var scroll = scrollY;
        console.log(scroll)

        // transition the logo
        logoFrame.style.top = 50 + scroll / 10 + "%";
        logoFrame.style.opacity = 1 - scroll/windowHeight

        // shift the fuzzy text
        if (scroll > fuzzyImage.offsetTop - windowHeight) {
            fuzzyImage.style.transform = "translate(" + Math.min(-40, (-1 + (scroll / (fuzzyImage.offsetTop + windowHeight))) * 100) + "%, -50%)";
            fuzzyText.style.bottom = (scroll - fuzzy.offsetTop) / 2 + "px";
        } 
    }
}());