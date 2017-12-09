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
    var secondaryVideo = document.getElementById('secondary-video');
    var logoFrame = document.getElementById('logo-frame');
    var fuzzy = document.getElementById('fuzzy');
    var popBlock = document.getElementById('pop-block');
    var popBlocks = document.getElementsByClassName('pop-blocks');
    var popBlock1 = document.getElementById('pop-block-1');
    var popBlock2 = document.getElementById('pop-block-2');
    var popBlock3 = document.getElementById('pop-block-3');

    // var fuzzyText = document.getElementById('fuzzy-text')
    // var fuzzyImage = document.getElementById('fuzzy-image')
    var food = document.getElementById('food')
    var map = document.getElementById('map')
    var mapLink = document.getElementById('map-link')
    var gallery = document.getElementById('gallery')
    var galleryImage = document.getElementsByClassName('gallery-image')
    // var riders = document.getElementById('riders')
    console.log('popBlocks', popBlocks)

    // On Load
    window.onload = function() {
        // fade in opacity
        logoFrame.style.opacity = 1
        // fade in video
        setTimeout(function() {
            heroVideo.style.opacity = 1
        }, 1000)

        setTimeout(function() {
            secondaryVideo.style.opacity = 1
        }, 5000)

    }


    // instafeed
    // var feed = new Instafeed({
    //     get: 'tagged',
    //     tagName: 'awesome',
    //     clientId: ' 4d4a2a28250346e5b7b4d3b4bd583dbb'
    // });
    // feed.run();

    timeout = function(i) {
        setTimeout(function() {
            galleryImage[i].style.opacity = 1
        }, 300 * i) 
    }

    timeout2 = function(i) {
        setTimeout(function() {
            popBlocks[i].style.height = 150 + 'px'
            popBlocks[i].style.width = 150 + 'px'
        }, 500 * i) 
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
        if (scroll > food.offsetTop - windowHeight * 0.75) {
            heroVideo.style.opacity = 0
        } else {
            heroVideo.style.opacity = 1
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

        // fade in popbox
        // if (scroll > fuzzy.offsetHeight - windowHeight / 2) {
        //     popBlock.style.opacity = 1;
        //     // popBlock.style.bottom = (scroll - popBlock.offsetHeight) / 3.5 + 'px'
        // } 
        // else {
        //     popBlock.style.opacity = 0;
        // }

        // // control popins
        // if (scroll > fuzzy.offsetTop - windowHeight / 2 && scroll < fuzzy.offsetTop + windowHeight / 2) {
        //         popBlock1.style.height = 100 + "%";
        //         popBlock1.style.width = 100 + "%";
        //     popBlock2.style.height = 0 + "px";
        //     popBlock2.style.width = 0 + "px";
        //     popBlock3.style.height = 0 + "px";
        //     popBlock3.style.width = 0 + "px";
        // } else if (scroll > fuzzy.offsetTop + windowHeight / 2 && scroll < fuzzy.offsetTop + 3 * windowHeight / 2) {
        //         popBlock2.style.height = 100 + "%";
        //         popBlock2.style.width = 100 + "%";
        //     popBlock1.style.height = 0 + "px";
        //     popBlock1.style.width = 0 + "px";
        //     popBlock3.style.height = 0 + "px";
        //     popBlock3.style.width = 0 + "px";
        // } else if (scroll > fuzzy.offsetTop + 3 * windowHeight / 2 && scroll < fuzzy.offsetTop + 5 * windowHeight / 2) {
        //         popBlock3.style.height = 100 + "%";
        //         popBlock3.style.width = 100 + "%";
        //     popBlock1.style.height = 0 + "px";
        //     popBlock1.style.width = 0 + "px";
        //     popBlock2.style.height = 0 + "px";
        //     popBlock2.style.width = 0 + "px";
        // }

        // pop fuzzy boxes

        console.log('scroll', scroll - (fuzzy.offsetTop - windowHeight / 2), "pop", popBlocks[0].offsetHeight)
        if (scroll > fuzzy.offsetTop - windowHeight / 2 && popBlocks[0].offsetHeight === 0) {
            for (var i = 0; i < popBlocks.length; i++) {
                timeout2(i)
            }
        }
    }
}());