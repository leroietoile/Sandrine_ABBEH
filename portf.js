const pics = document.querySelectorAll('.pic');
const scrollxButonL = document.getElementById('SBL');
const scrollxButonR = document.getElementById('SBR');;
const imgScreen = document.querySelector('.img_screen');
const visiblePic = document.querySelector('.visible_pic');
let picsSrc = [];
let n = 0;

for (let i = 0; i < pics.length; i++ ){
    picsSrc.push(pics[i].src);
}

const nextPrevImage = (SB, scrollToRight = true)=>{
    SB.addEventListener('click', ()=>{
        if (scrollToRight == true){
            n++;
            console.log("right")
        }
        else{
            n--;
            console.log("left")
        }

        if (n > (pics.length)-1){
            n = 0
        }
        if (n < 0){
            n = pics.length-1
        }
        visiblePic.src = picsSrc[n];
    })  
}


if(imgScreen.clientHeight <= scrollxButonL.clientHeight + 5){
    visiblePic.src = picsSrc[n];
    console.log( visiblePic.src);
}

nextPrevImage(scrollxButonL, false)
nextPrevImage(scrollxButonR, true)



