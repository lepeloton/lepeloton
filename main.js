(function() {

    // get window heights and widths
    var w=window,
        d=document,
        e=d.documentElement,
        g=d.getElementsByTagName('body')[0],
        windowWidth=w.innerWidth||e.clientWidth||g.clientWidth,
        windowHeight=w.innerHeight||e.clientHeight||g.clientHeight;


    // declare elements
    var location = document.getElementsByClassName('location')
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
    var footerLogo = document.getElementById('footer-logo');
    // var riders = document.getElementById('riders')




    var frames = document.getElementsByClassName('frames');

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
        }, 1000)

        heroVideo.playbackRate = 0.8;

    }

    var update = function () {
        canScroll = false
        setTimeout(function() {
                canScroll = true
            }, 1000)

        var transition = ''
        var prevFramePosition = ''
        if (frame - prevFrame > 0) {
            transition = 'up'
            prevFramePosition = 'above'
        } else {
            transition = 'down'
            prevFramePosition = 'below'
        }

        location[frame - 1].classList.add('active')
        location[prevFrame - 1].classList.remove('active')

        frames[frame - 1].classList.add('active', transition)
        frames[frame - 1].classList.remove('above', 'below')

        frames[prevFrame - 1].classList.remove('active', 'up', 'down')
        frames[prevFrame - 1].classList.add(prevFramePosition)

        if(frame === 2) {
            for (let i = 0; i < popBlocks.length; i++) {
                const block = popBlocks[i];
                block.classList.remove('shown')
            }
            setTimeout(function() {
                popBlock1.classList.add('shown')
            }, 2000)
        }

        if(frame === 3) {
            heroVideo.style.opacity = 0;
        } else if (heroVideo.style.opacity !== 1) {
            heroVideo.style.opacity = 1;
        }

        if(frame === 5) {
            Array.from(galleryImage).forEach(function(image, i) {
                setTimeout(function() {
                    image.classList.add('shown')
                }, 300 * i)
            })
        }

        if(frame !== 5 && galleryImage[0].classList.contains('shown') > 0) {
            Array.from(galleryImage).forEach(function(image, i) {
                image.classList.remove('shown')
            })
        }

        if(frame === 7) {
            footerLogo.style.opacity = 1;
        }
    }

    // Scroll Section
    document.addEventListener("wheel", scrollHandler);
    document.addEventListener("touchmove", scrollHandler)


    function scrollHandler(e) {
        e.preventDefault();

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
                if (oldFinger && newFinger - oldFinger <= -50 && frame < frames.length) {
                    prevFrame = frame
                    frame ++
                    update()
                } else if (newFinger - oldFinger >= 50 && frame > 1) {
                    prevFrame = frame
                    frame --
                    update()
                }
                lastFinger = newFinger

            } else if (e.deltaY) {
                prevFrame = frame
                if (e.deltaY > 0 && frame < frames.length) {
                    frame ++
                    update()
                } else if (e.deltaY < 0 && frame > 1) {
                    frame --
                    update()
                }
                              
            }
        }
    }
}());


function toggleBlock(nextBlock) {
    var blocks = document.getElementsByClassName('pop-blocks');

    for (let i = 0; i < blocks.length; i++) {
        const block = blocks[i];
        block.classList.remove('shown')
    }

    blocks[nextBlock].classList.add('shown')
}