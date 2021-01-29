gsap.to("#landing",{x:-80,duration:1});
function scrolltovideo() {
    console.log("1");
    gsap.to(window, {duration: 1.5, scrollTo:"#video"});
}