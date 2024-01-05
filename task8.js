function init() {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


}

init()

gsap.to("#page4",{
  borderRadius:0,
  scrollTrigger:{
    trigger:"#page4",
    scroller:"#main",
    
    scrub:4,
    start:"20% 30%",
    end:"35% 30%"
  }
})

gsap.to("#page5",{
  borderRadius:0,
  scrollTrigger:{
    trigger:"#page5",
    scroller:"#main",
    
    scrub:4,
    start:"20% 30%",
    end:"35% 30%"
  }
})

gsap.to("#page6",{
  borderRadius:0,
  scrollTrigger:{
    trigger:"#page6",
    scroller:"#main",
    
    scrub:4,
    start:"20% 30%",
    end:"35% 30%"
  }
})

gsap.to("#page7",{
  borderRadius:0,
  scrollTrigger:{
    trigger:"#page7",
    scroller:"#main",
    
    scrub:4,
    start:"20% 30%",
    end:"35% 30%"
  }
})

gsap.to("#page8",{
  borderRadius:0,
  scrollTrigger:{
    trigger:"#page8",
    scroller:"#main",
    
    scrub:4,
    start:"20% 30%",
    end:"35% 30%"
  }
})


gsap.from("#page1>h1",{
  y:100,
  scrollTrigger:{
   
    trigger:"#page1",
    scroller:"#main",
    scrub:5,
    start:"20% 30%"
  }
})

gsap.from("#smile1",{
  y:800,
  scrollTrigger:{
   
    trigger:"#page1",
    scroller:"#main",
    scrub:5,
    start:"20% 30%"
  }
})


gsap.from("#circle",{
  y:100,
  scrollTrigger:{
   
    trigger:"#page1",
    scroller:"#main",
    scrub:5,
    start:"20% 30%"
  }
})

gsap.from("#dic",{
  y:100,
  scrollTrigger:{ 
    trigger:"#page1",
    scroller:"#main",
    scrub:5,
    start:"20% 30%"
  }
})

gsap.from("#arrow1",{
  y:100,
  scrollTrigger:{ 
    trigger:"#page1",
    scroller:"#main",
    scrub:5,
    start:"20% 30%"
  }
})

gsap.from("#text",{
  y:100,
  scrollTrigger:{ 
    trigger:"#page1",
    scroller:"#main",
    scrub:5,
    start:"20% 30%"
  }
})


gsap.from("#arrow2",{
  y:100,
  scrollTrigger:{ 
    trigger:"#page1",
    scroller:"#main",
    scrub:5,
    start:"20% 30%"
  }
})



gsap.from("#arrow1",{
  y:-40,
  x:-40,
  opacity:0,
  delay:1,
  duration:1
  
})

gsap.from("#arrow2",{
  y:30,
  x:10,
  opacity:0,
  delay:1,
  duration:1
  
})

gsap.from("#page3>h2",{
  y:100,
  opacity:0,
  scrollTrigger:{
    trigger:"#page3",
    scroller:"#main",
   
    start:"top 70%",
    scrub:3,
    end:"top 50%",
  }
})

gsap.from("#page3>h1",{
  y:150,
  opacity:0,
  scrollTrigger:{
    trigger:"#page3",
    scroller:"#main",
  
    start:"28% 80%",
    scrub:3,
    end:"top 50%",
  }
})

gsap.from("#card1",{
  y:240,
  rotate:0,
  scrollTrigger:{
    trigger:"#page4",
    scroller:"#main",
    
    start:"-20% 30%",
    scrub:3,
    end:"-15% 30%"
  }
})

gsap.from("#card2",{
  y:240,
  scrollTrigger:{
    trigger:"#page4",
    scroller:"#main",
    
    start:"-20% 30%",
    scrub:3,
    end:"-15% 30%"
  }
})


gsap.from("#card3",{
  y:240,
  rotate:0,
  scrollTrigger:{
    trigger:"#page5",
    scroller:"#main",
    
    start:"-20% 30%",
    scrub:3,
    end:"-15% 30%"
  }
})

gsap.from("#card4",{
  y:240,
  scrollTrigger:{
    trigger:"#page5",
    scroller:"#main",
    
    start:"-20% 30%",
    scrub:3,
    end:"-15% 30%"
  }
})


gsap.from("#card5",{
  y:240,
  rotate:10,
  scrollTrigger:{
    trigger:"#page6",
    scroller:"#main",
    
    start:"-20% 30%",
    scrub:3,
    end:"-15% 30%"
  }
})

gsap.from("#card6",{
  y:240,
  scrollTrigger:{
    trigger:"#page6",
    scroller:"#main",
    
    start:"-20% 30%",
    scrub:3,
    end:"-15% 30%"
  }
})


gsap.from("#card7",{
  y:240,
  rotate:10,
  scrollTrigger:{
    trigger:"#page7",
    scroller:"#main",
    
    start:"-20% 30%",
    scrub:3,
    end:"-15% 30%"
  }
})

gsap.from("#card8",{
  y:240,
  scrollTrigger:{
    trigger:"#page7",
    scroller:"#main",
    
    start:"-20% 30%",
    scrub:3,
    end:"-15% 30%"
  }
})


gsap.from("#card9",{
  y:240,
  
  scrollTrigger:{
    trigger:"#page8",
    scroller:"#main",
    
    start:"-20% 30%",
    scrub:3,
    end:"-15% 30%"
  }
})

gsap.from("#card10",{
  y:240,
  rotate:-20,
  scrollTrigger:{
    trigger:"#page8",
    scroller:"#main",
    
    start:"-20% 30%",
    scrub:3,
    end:"-15% 30%"
  }
})

document.querySelector("#card1").addEventListener("mouseenter",function(){
  document.querySelector("#card1").style.rotate = "-16deg"
  document.querySelector("#card2").style.rotate = "18deg"
  document.querySelector("#page4>h2").style.scale = 1.1
})

document.querySelector("#card1").addEventListener("mouseleave",function(){
  document.querySelector("#card1").style.rotate = "0deg"
  document.querySelector("#card2").style.rotate = "0deg"
  document.querySelector("#page4>h2").style.scale = 1

})

document.querySelector("#card2").addEventListener("mouseenter",function(){
  document.querySelector("#card1").style.rotate = "-16deg"
  document.querySelector("#card2").style.rotate = "18deg"
  document.querySelector("#page4>h2").style.scale = 1.1
})

document.querySelector("#card2").addEventListener("mouseleave",function(){
  document.querySelector("#card1").style.rotate = "0deg"
  document.querySelector("#card2").style.rotate = "0deg"
  document.querySelector("#page4>h2").style.scale = 1

})



document.querySelector("#card3").addEventListener("mouseenter",function(){
  document.querySelector("#card3").style.rotate = "-16deg"
  document.querySelector("#card4").style.rotate = "18deg"
  document.querySelector("#page5>h2").style.scale = 1.1
})

document.querySelector("#card3").addEventListener("mouseleave",function(){
  document.querySelector("#card3").style.rotate = "0deg"
  document.querySelector("#card4").style.rotate = "0deg"
  document.querySelector("#page5>h2").style.scale = 1

})

document.querySelector("#card4").addEventListener("mouseenter",function(){
  document.querySelector("#card3").style.rotate = "-16deg"
  document.querySelector("#card4").style.rotate = "18deg"
  document.querySelector("#page5>h2").style.scale = 1.1
})

document.querySelector("#card4").addEventListener("mouseleave",function(){
  document.querySelector("#card3").style.rotate = "0deg"
  document.querySelector("#card4").style.rotate = "0deg"
  document.querySelector("#page5>h2").style.scale = 1

})





document.querySelector("#card5").addEventListener("mouseenter",function(){
  document.querySelector("#card5").style.rotate = "-16deg"
  document.querySelector("#card6").style.rotate = "18deg"
  document.querySelector("#page6>h2").style.scale = 1.1
})

document.querySelector("#card5").addEventListener("mouseleave",function(){
  document.querySelector("#card5").style.rotate = "0deg"
  document.querySelector("#card6").style.rotate = "0deg"
  document.querySelector("#page6>h2").style.scale = 1

})

document.querySelector("#card6").addEventListener("mouseenter",function(){
  document.querySelector("#card5").style.rotate = "-16deg"
  document.querySelector("#card6").style.rotate = "18deg"
  document.querySelector("#page6>h2").style.scale = 1.1
})

document.querySelector("#card6").addEventListener("mouseleave",function(){
  document.querySelector("#card5").style.rotate = "0deg"
  document.querySelector("#card6").style.rotate = "0deg"
  document.querySelector("#page6>h2").style.scale = 1

})





document.querySelector("#card7").addEventListener("mouseenter",function(){
  document.querySelector("#card7").style.rotate = "-16deg"
  document.querySelector("#card8").style.rotate = "18deg"
  document.querySelector("#page7>h2").style.scale = 1.1
})

document.querySelector("#card7").addEventListener("mouseleave",function(){
  document.querySelector("#card7").style.rotate = "0deg"
  document.querySelector("#card8").style.rotate = "0deg"
  document.querySelector("#page7>h2").style.scale = 1

})

document.querySelector("#card8").addEventListener("mouseenter",function(){
  document.querySelector("#card7").style.rotate = "-16deg"
  document.querySelector("#card8").style.rotate = "18deg"
  document.querySelector("#page7>h2").style.scale = 1.1
})

document.querySelector("#card8").addEventListener("mouseleave",function(){
  document.querySelector("#card7").style.rotate = "0deg"
  document.querySelector("#card8").style.rotate = "0deg"
  document.querySelector("#page7>h2").style.scale = 1

})






document.querySelector("#card9").addEventListener("mouseenter",function(){
  document.querySelector("#card9").style.rotate = "-16deg"
  document.querySelector("#card10").style.rotate = "18deg"
  document.querySelector("#page8>h2").style.scale = 1.1
})

document.querySelector("#card9").addEventListener("mouseleave",function(){
  document.querySelector("#card9").style.rotate = "0deg"
  document.querySelector("#card10").style.rotate = "0deg"
  document.querySelector("#page8>h2").style.scale = 1

})

document.querySelector("#card10").addEventListener("mouseenter",function(){
  document.querySelector("#card9").style.rotate = "-16deg"
  document.querySelector("#card10").style.rotate = "18deg"
  document.querySelector("#page8>h2").style.scale = 1.1
})

document.querySelector("#card10").addEventListener("mouseleave",function(){
  document.querySelector("#card9").style.rotate = "0deg"
  document.querySelector("#card10").style.rotate = "0deg"
  document.querySelector("#page8>h2").style.scale = 1

})


document.querySelector("#nav img").addEventListener("mouseenter",function(){
  document.querySelector("#nav img").style.rotate = "180deg"
})

document.querySelector("#nav img").addEventListener("mouseleave",function(){
  document.querySelector("#nav img").style.rotate = "0deg"
})

var check = 0


document.querySelector("#menu").addEventListener("click",function(){
 if(check == 0){
  document.querySelector("#side").style.bottom = "18rem"
  document.querySelector("#side").style.opacity= "1"
  document.querySelector("#line1").style.rotate= "45deg"
  document.querySelector("#line2").style.rotate= "-40deg"
  document.querySelector("#line2").style.marginBottom= "1rem"
  check = 1
 }else{
  document.querySelector("#side").style.bottom = "-1005"
  document.querySelector("#side").style.opacity= "0"
  document.querySelector("#line1").style.rotate= "0deg"
  document.querySelector("#line2").style.rotate= "0deg"
  document.querySelector("#line2").style.marginBottom= "0rem"
  check = 0
 }

})

