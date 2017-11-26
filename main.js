(function() {

    // get window heights and widths
    var w=window,
        d=document,
        e=d.documentElement,
        g=d.getElementsByTagName('body')[0],
        windowWidth=w.innerWidth||e.clientWidth||g.clientWidth,
        windowHeight=w.innerHeight||e.clientHeight||g.clientHeight;


    // declare elements
    var heroVideo = document.getElementById('hero-video');
    var logoFrame = document.getElementById('logo-frame');
    var fuzzy = document.getElementById('fuzzy');
    var popBlock = document.getElementById('pop-block');
    var popBlock1 = document.getElementById('pop-block-1');
    var popBlock2 = document.getElementById('pop-block-2');

    // var fuzzyText = document.getElementById('fuzzy-text')
    // var fuzzyImage = document.getElementById('fuzzy-image')
    var food = document.getElementById('food')
    var map = document.getElementById('map')
    var mapLink = document.getElementById('map-link')
    var gallery = document.getElementById('gallery')
    var galleryImage = document.getElementsByClassName('gallery-image')
    // var riders = document.getElementById('riders')


    // On Load
    window.onload = function() {
        // fade in opacity
        logoFrame.style.opacity = 1
        // fade in video
        setTimeout(function() {
            heroVideo.style.opacity = 1
        }, 1000)

    }


    // instafeed
    // var feed = new Instafeed({
    //     get: 'tagged',
    //     tagName: 'awesome',
    //     clientId: ' 4d4a2a28250346e5b7b4d3b4bd583dbb'
    // });
    // feed.run();

    timeout = function(i) {
        console.log('i', i)
        setTimeout(function() {
            console.log('i2', i)
            galleryImage[i].style.opacity = 1
        }, 300 * i) 
    }


    // Scroll Section
    window.onscroll = function() {
        var scroll = scrollY;
        console.log(scroll)

        // transition the logo
        logoFrame.style.top = 50 + scroll / windowHeight / 2 * 100 + "%";
        logoFrame.style.opacity = 1 - scroll / windowHeight

        // shift the fuzzy text
        // if (scroll > fuzzy.offsetTop - windowHeight && scroll < fuzzy.offsetTop + windowHeight) {
        //     fuzzyImage.style.transform = "translate(-40%, -50%)";
        //     fuzzyText.style.top = scroll/2 + "px";
        //     let trans = - 100 + scroll / windowHeight * 100 / 2
        //     fuzzyText.style.transform = "translateY(" + trans + "%)";
        // } else {
        //     fuzzyImage.style.transform = "translate(-100%, -50%)";
        // }

        // Food video to top
        if (scroll > food.offsetTop - windowHeight) {
            food.style.zIndex = 6
        } else {
            food.style.zIndex = 4
        }

        // map to top
        if (scroll > map.offsetTop - windowHeight) {
            map.style.zIndex = 7
        } else {
            map.style.zIndex = 0
        }

        // transition map link
        if (scroll > map.offsetTop - windowHeight / 2) {
            mapLink.style.opacity = 1
        } else {
            mapLink.style.opacity = 0
        }

        // transition images
        if (scroll > gallery.offsetTop - windowHeight && galleryImage[0].style.opacity != 1) {
            for (var i = 0; i < galleryImage.length; i++) {
                timeout(i)
            }
        }

        // transition images
        // if (scroll > food.offsetTop - windowHeight) {
        //     let trans = (scroll - food.offsetTop)
        //     riders.style.bottom = trans + 'px'
        // }

        // move popblock with scroll
        if (scroll > fuzzy.offsetTop - windowHeight / 2) {
            popBlock.style.top = scroll - fuzzy.offsetTop + windowHeight / 2 + "px";
        }

        // control popins
        if (scroll > fuzzy.offsetTop - windowHeight / 2 && scroll < fuzzy.offsetTop + windowHeight / 2) {
            setTimeout(function() {
                popBlock1.style.height = 100 + "%";
                popBlock1.style.width = 100 + "%";
            }, 300)
            popBlock2.style.height = 0 + "px";
            popBlock2.style.width = 0 + "px";
        } else if (scroll > fuzzy.offsetTop + windowHeight / 2 && scroll < fuzzy.offsetTop + windowHeight) {
            setTimeout(function() {
                popBlock2.style.height = 100 + "%";
                popBlock2.style.width = 100 + "%";
            }, 300)
            popBlock1.style.height = 0 + "px";
            popBlock1.style.width = 0 + "px";
        }
    }
}());