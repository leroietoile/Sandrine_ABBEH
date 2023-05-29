const ratio = .1
const options = { 
    root: null, 
    rootMargin: '0%', 
    threshold: ratio
}

const handlelntersect = function (entries, observer){ 
    entries.forEach(function(entry){
        console.log(entry.intersectionRatio)
        if(entry.intersectionRatio > ratio){
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        }
        else{
        }
        })
}

const observer = new IntersectionObserver(handlelntersect, options)
observer.observe(document.querySelector('.reveal'))


// document.documentElement.classList.add('reveal-loaded')

// window.addEventListener("DOMContentLoaded",function () {
//     const observer = new IntersectionObserver(handlelntersect, options) 
//     const targets = document.querySelectorAll('.reveal')
//     targets.forEach(function (target) {observer.observe(target)}) 
// })
    