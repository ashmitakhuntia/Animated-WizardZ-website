function page1Animation(){
    var tl = gsap.timeline()
    
tl.from("nav h1, nav h4, nav button",{
    y:-30,
    duration:0.3,
    delay:0.3,
    opacity:0,
    stagger:0.15
})
tl.from(".center-part1 h1",{
    x:-200,
    opacity:0,
    duaration:0.2
},"-=0.3")
tl.from(".center-part1 p",{
    x:-100,
    opacity:0,
    duaration:0.2
})
tl.from(".center-part1 button",{
    opacity:0,
    duaration:0.1
})
tl.from(".center-part2 img",{
    opacity:0,
    duration:0.1,
    x:200
},"-=0.2")
tl.from(".section1bottom img",{
    opacity:0,
    y:30,
    stagger:0.1,
    duration:0.6
})
}

function page2Animation(){
    var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller:"body",
        start:"top 50%",
        end:"top 0",
        scrub:2
    }
})
tl2.from(".services",{
    y:30,
    opacity:0,
    duration:0.5
})
tl2.from(".elem.line1.left",{
    opacity:0,
    x:-300,
    duration:0.6
},"ad1")
tl2.from(".elem.line1.right",{
    opacity:0,
    x:300,
    duration:0.6
},"ad1")
tl2.from(".elem.line2.left",{
    opacity:0,
    x:-300,
    duration:0.6
},"ad2")
tl2.from(".elem.line2.right",{
    opacity:0,
    x:300,
    duration:0.6
},"ad2")

}

page1Animation()
page2Animation()