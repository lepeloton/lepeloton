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




    var frames = document.getElementsByClassName('frames');
console.log('FRAMES', frames)

    // SCROLLING VARIABLES
    var windowLoaded = false;
    var canScroll = false;
    var frame = 1;
    var prevFrame = 1;
    var scroll = 0;
    var updateNeeded = false;

    var oldFinger = 0
    var lastFinger = 0

    // On Load
    window.onload = function() {

        // create scrolling parameters
        windowLoaded = true;

        // fade in opacity
        logoFrame.style.opacity = 1
        // fade in video
        setTimeout(function() {
            heroVideo.style.opacity = 1;
        }, 1000)

        setTimeout(function() {
            canScroll = true;
        }, 2000)

    }

    var update = function () {
        canScroll = false
        setTimeout(function() {
                canScroll = true
            }, 2000)

        var transition = ''
        var prevFramePosition = ''
        if (frame - prevFrame > 0) {
            transition = 'up'
            prevFramePosition = 'above'
        } else {
            transition = 'down'
            prevFramePosition = 'below'
        }

        frames[frame - 1].classList.add('active', transition)
        frames[frame - 1].classList.remove('above', 'below')

        frames[prevFrame - 1].classList.remove('active', 'up', 'down')
        frames[prevFrame - 1].classList.add(prevFramePosition)
    }

    // Scroll Section
    document.addEventListener("wheel", scrollHandler);
    document.addEventListener("touchmove", scrollHandler)


    function scrollHandler(e) {
        if(windowLoaded && canScroll === true) {

            if (e.touches) {
                var newFinger = e.touches[0].screenY
                if(newFinger - lastFinger < -50 || newFinger - lastFinger > 50) {
                    // if the last finger position and the new finger position are widely separated, it means a new swipe from the user, therefore reset the olfFinger to newFinger to "start again"
                    oldFinger = newFinger
                }
                setTimeout(function() {
                    oldFinger = newFinger
                }, 500)
                if (oldFinger && newFinger - oldFinger <= -50) {
                    prevFrame = frame
                    frame ++
                    update()
                } else if (newFinger - oldFinger >= 50 && frame != 1) {
                    prevFrame = frame
                    frame --
                    update()
                }
                lastFinger = newFinger

            } else if (e.deltaY) {
                prevFrame = frame
                if (e.deltaY > 0) {
                    frame ++
                } else if (frame != 1) {
                    frame --
                }
                update()              
            }
        }

    // Scroll Section
    // window.onscroll = function() {
    //     var scroll = scrollY;
    //     console.log(scroll)

    //     // transition the logo
    //     logoFrame.style.top = 50 + scroll / windowHeight / 2 * 100 + "%";
    //     logoFrame.style.opacity = 1 - scroll / windowHeight

    //     // shift the fuzzy text
    //     // if (scroll > fuzzy.offsetTop - windowHeight && scroll < fuzzy.offsetTop + windowHeight) {
    //     //     fuzzyImage.style.transform = "translate(-40%, -50%)";
    //     //     fuzzyText.style.top = scroll/2 + "px";
    //     //     let trans = - 100 + scroll / windowHeight * 100 / 2
    //     //     fuzzyText.style.transform = "translateY(" + trans + "%)";
    //     // } else {
    //     //     fuzzyImage.style.transform = "translate(-100%, -50%)";
    //     // }

    //     // Food video to top
    //     if (scroll > food.offsetTop - windowHeight * 0.75) {
    //         heroVideo.style.opacity = 0
    //     } else {
    //         heroVideo.style.opacity = 1
    //     }

    //     // map to top
    //     if (scroll > map.offsetTop - windowHeight) {
    //         map.style.zIndex = 7
    //     } else {
    //         map.style.zIndex = 0
    //     }

    //     // transition map link
    //     if (scroll > map.offsetTop - windowHeight / 2) {
    //         mapLink.style.opacity = 1
    //     } else {
    //         mapLink.style.opacity = 0
    //     }

    //     // transition images
    //     if (scroll > gallery.offsetTop - windowHeight && galleryImage[0].style.opacity != 1) {
    //         for (var i = 0; i < galleryImage.length; i++) {
    //             timeout(i)
    //         }
    //     }

    //     // transition images
    //     // if (scroll > food.offsetTop - windowHeight) {
    //     //     let trans = (scroll - food.offsetTop)
    //     //     riders.style.bottom = trans + 'px'
    //     // }

    //     // fade in popbox
    //     // if (scroll > fuzzy.offsetHeight - windowHeight / 2) {
    //     //     popBlock.style.opacity = 1;
    //     //     // popBlock.style.bottom = (scroll - popBlock.offsetHeight) / 3.5 + 'px'
    //     // } 
    //     // else {
    //     //     popBlock.style.opacity = 0;
    //     // }

    //     // // control popins
    //     // if (scroll > fuzzy.offsetTop - windowHeight / 2 && scroll < fuzzy.offsetTop + windowHeight / 2) {
    //     //         popBlock1.style.height = 100 + "%";
    //     //         popBlock1.style.width = 100 + "%";
    //     //     popBlock2.style.height = 0 + "px";
    //     //     popBlock2.style.width = 0 + "px";
    //     //     popBlock3.style.height = 0 + "px";
    //     //     popBlock3.style.width = 0 + "px";
    //     // } else if (scroll > fuzzy.offsetTop + windowHeight / 2 && scroll < fuzzy.offsetTop + 3 * windowHeight / 2) {
    //     //         popBlock2.style.height = 100 + "%";
    //     //         popBlock2.style.width = 100 + "%";
    //     //     popBlock1.style.height = 0 + "px";
    //     //     popBlock1.style.width = 0 + "px";
    //     //     popBlock3.style.height = 0 + "px";
    //     //     popBlock3.style.width = 0 + "px";
    //     // } else if (scroll > fuzzy.offsetTop + 3 * windowHeight / 2 && scroll < fuzzy.offsetTop + 5 * windowHeight / 2) {
    //     //         popBlock3.style.height = 100 + "%";
    //     //         popBlock3.style.width = 100 + "%";
    //     //     popBlock1.style.height = 0 + "px";
    //     //     popBlock1.style.width = 0 + "px";
    //     //     popBlock2.style.height = 0 + "px";
    //     //     popBlock2.style.width = 0 + "px";
    //     // }

    //     // pop fuzzy boxes

    //     console.log('scroll', scroll - (fuzzy.offsetTop - windowHeight / 2), "pop", popBlocks[0].offsetHeight)
    //     if (scroll > fuzzy.offsetTop - windowHeight / 2 && popBlocks[0].offsetHeight === 0) {
    //         for (var i = 0; i < popBlocks.length; i++) {
    //             timeout2(i)
    //         }
    //     }
    }
}());