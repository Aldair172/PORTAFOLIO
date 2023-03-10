document.addEventListener("DOMContentLoaded", function(event) {
    disableScroll()
    setTimeout(function(){ enableScroll() }, 4500);
    animateText('nameTxt', 4.5)
    animateText('front', 4.5)
    animateText('skills', 4.5)

    document.getElementById("right").onclick = function (){
        count++;
        count = arrowClick(count, companyNames, companyDates, medtrainer, psl, openr)
    }

    document.getElementById("left").onclick = function (){
        count--
        count = arrowClick(count, companyNames, companyDates, medtrainer, psl, openr)
    }

    // init controller
    var controller = new ScrollMagic.Controller();

    // create a scene lwt
	const animateElem = document.getElementById("circle");


    new ScrollMagic.Scene({triggerElement: "#me", duration: "70%"})
    .on("enter", function () {
        animateElem.classList.add("noline")
        animateElem.classList.remove("right")
        animateElem.classList.remove("left")
        animateElem.innerHTML = ''
    })
    //.addIndicators()
    .addTo(controller);
    
    new ScrollMagic.Scene({triggerElement: "#myWorkTitle", duration: 600})
    .on("enter", function () {
        animateElem.classList.remove("noline")
        animateElem.classList.remove("career")
        animateElem.classList.add("right")
        animateElem.innerHTML = "<p class='title'>CALCULADORA JS</p><p class='desc'>Aqui te muestro la calculadora que solo hace las operaciones basicas de matematicas...</p>"
        document.getElementById('myWorkTitle').style.filter = "grayscale(0%)"
    })
    .on("leave", function () {
        document.getElementById('myWorkTitle').style.filter = "grayscale(100%)"
    })
    //.addIndicators()
    .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#myWorkTitle2", duration: 600})
    .on("enter", function () {
        animateElem.classList.add("left")
        animateElem.classList.remove("right")
        animateElem.innerHTML = "<p class='title'>Varios ejemplos de JS</p><p class='desc'>Te muestro varias funciones que aprendi por medio de clases que eh tomado...</p>"
        document.getElementById('myWorkTitle2').style.filter = "grayscale(0%)"
    })
    .on("leave", function () {
        document.getElementById('myWorkTitle2').style.filter = "grayscale(100%)"
    })
    //.addIndicators()
    .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#myWorkTitle3", duration: 600})
    .on("enter", function () {
        animateElem.classList.add("right")
        animateElem.classList.remove("left")
        animateElem.classList.remove("noline")
        animateElem.innerHTML = "<p class='title'>Venta de guitarras</p><p class='desc'>Aqui ya trate de desarrollar una pagina web de venta de guitarras un poco mas realista...</p>"
        document.getElementById('myWorkTitle3').style.filter = "grayscale(0%)"
    
    })
    .on("leave", function () {
        document.getElementById('myWorkTitle3').style.filter = "grayscale(100%)"
    })
    //.addIndicators()
    .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#people", duration: "100%"})
    .on("enter", function () {
        animateElem.classList.remove("right")
        animateElem.classList.remove("left")
        animateElem.classList.add("noline")
        animateElem.innerHTML = ""
    
    })
    .on("leave", function () {
        animateElem.innerHTML = ''
    })
    //.addIndicators()
    .addTo(controller);

});

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

const animateText = (id, delay) => {
    const name = document.getElementById(id)
     nameAnimation = ''

    for(let i = 0; i < name.innerHTML.length; i++){
        nameAnimation += `<span style='animation:slideLetterUp .3s ease forwards ${delay}s'>${name.innerHTML.charAt(i) == ' ' ? '&nbsp;' + name.innerHTML.charAt(i) : name.innerHTML.charAt(i) }</span>`
        delay = delay + 0.1;
    }

    name.innerHTML = nameAnimation
}

const arrowClick = (count, companyNames, companyDates, medtrainer, psl, openr) => {

    if(count === 3){
        count = 0
    }
    if(count < 0){
        count = 2
    }
    document.getElementById("company-name").innerHTML = companyNames[count]    
    animateText('company-name', 0)
    document.getElementById("company-date").innerHTML = companyDates[count]    
    animateText('company-date', 0)

    const techstack = document.getElementById("techstack");
    techstack.innerHTML = ""

    if(count === 0 ){
        for(let i = 0; i < medtrainer.length; i++){
            let div = document.createElement("div")
            medtrainer[i].includes("<p>") ? div.classList.add("tech-item", "wide") : div.classList.add("tech-item")
            div.innerHTML = medtrainer[i]
            techstack.append(div);
        }
    }

    if(count === 1 ){
        for(let i = 0; i < psl.length; i++){
            let div = document.createElement("div")
            psl[i].includes("<p>") ? div.classList.add("tech-item", "wide") : div.classList.add("tech-item")
            div.innerHTML = psl[i]
            techstack.append(div);
        }
    }

    if(count === 2 ){
        for(let i = 0; i < openr.length; i++){
            let div = document.createElement("div")
            openr[i].includes("<p>") ? div.classList.add("tech-item", "wide") : div.classList.add("tech-item")
            div.innerHTML = openr[i]
            techstack.append(div);
        }
    }

    return count
}

const disableScroll = () => {
    document.body.classList.add("stop-scrolling");
}
  
const enableScroll = () => {
    document.body.classList.remove("stop-scrolling");
}