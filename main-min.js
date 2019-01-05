(function(){var location=document.getElementsByClassName('location')
var position=document.getElementById('position')
var heroVideo=document.getElementById('hero-video');var tertiaryVideo=document.getElementById('tertiary-video');var logoFrame=document.getElementById('logo-frame');var popBlocks=document.getElementsByClassName('pop-blocks');var popBlock1=document.getElementById('pop-block-1');var footerLogo=document.getElementById('footer-logo');var frames=document.getElementsByClassName('frames');var fullscreen=!1
var addressBarsRemoved=!1;var windowLoaded=!1;var canScroll=!1;var frame=1;var prevFrame=1;var oldFinger=0
var lastFinger=0
window.onload=function(){windowLoaded=!0;logoFrame.style.opacity=1
setTimeout(function(){heroVideo.style.opacity=0.7},1000)
setTimeout(function(){canScroll=!0},1000)
heroVideo.playbackRate="0.5";tertiaryVideo.playbackRate="0.5"}
var update=function(){canScroll=!1
setTimeout(function(){canScroll=!0},1000)
var transition=''
var prevFramePosition=''
if(frame-prevFrame>0){transition='up'
prevFramePosition='above'}else{transition='down'
prevFramePosition='below'}
location[frame-1].classList.add('active')
location[prevFrame-1].classList.remove('active')
frames[frame-1].classList.add('active',transition)
frames[frame-1].classList.remove('above','below')
frames[prevFrame-1].classList.remove('active','up','down')
frames[prevFrame-1].classList.add(prevFramePosition)
if(frame===2){for(let i=0;i<popBlocks.length;i++){const block=popBlocks[i];block.classList.remove('shown')}
setTimeout(function(){popBlock1.classList.add('shown')},750)}
if(frame===3||frame===5){heroVideo.style.opacity=0}else if(heroVideo.style.opacity!==0.7){heroVideo.style.opacity=0.7}
if(frame===6){footerLogo.style.opacity=1}
if(frame!==1){position.style.opacity=1}
if(frame===2||frame===4){position.style.color='#000'}else{position.style.color='#fff'}}
document.addEventListener("wheel",scrollHandler);document.addEventListener("touchmove",scrollHandler,{passive:!1})
function scrollHandler(e){if(!fullscreen&&window.scrollY>0){canScroll=!1
fullscreen=!0
prevFrame=frame
frame ++
console.log('FIRING ONE')
update()}else if(fullscreen){e.preventDefault();if(windowLoaded&&canScroll===!0){console.log('FIRING TWO')
if(e.touches){var newFinger=e.touches[0].screenY
if(newFinger-lastFinger<-50||newFinger-lastFinger>50){oldFinger=newFinger}
setTimeout(function(){oldFinger=newFinger},500)
if(oldFinger&&newFinger-oldFinger<=-50&&frame<frames.length){prevFrame=frame
frame ++
update()}else if(newFinger-oldFinger>=50&&frame>1){prevFrame=frame
frame --
update()}
lastFinger=newFinger}else if(e.deltaY){prevFrame=frame
if(e.deltaY>0&&frame<frames.length){frame ++
update()}else if(e.deltaY<0&&frame>1){frame --
update()}}}}}}());function toggleBlock(nextBlock){var blocks=document.getElementsByClassName('pop-blocks');for(let i=0;i<blocks.length;i++){const block=blocks[i];block.classList.remove('shown')}
blocks[nextBlock].classList.add('shown')}