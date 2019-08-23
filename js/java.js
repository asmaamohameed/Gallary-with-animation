var imgs = document.querySelectorAll(".item-img");
var lightboxcontainer = document.querySelector(".lightbox-container");
var lightboxitem = document.querySelector(".lightbox-item");
var wClose = document.getElementById("wClose");
var next = document.getElementById("next");
var prev = document.getElementById("prev")

var currentIndex = 0;
var imgsArray = [];


for( var i = 0 ; i<imgs.length ; i++)
    {
        imgsArray.push(imgs[i]);
        
        imgs[i].addEventListener("click" , function(e){

            lightboxcontainer.classList.add("show");
            var imgsrc = e.target.src;
            lightboxitem.style.backgroundImage = "url("+imgsrc+")";
            
            currentIndex = imgsArray.indexOf(e.target);
        })
    }
next.addEventListener("click" , function(){
    nextMove();
})

prev.addEventListener("click" , function(){
    prevMove();
})
function nextMove()
{
    currentIndex++;
    if(currentIndex == imgsArray.length)
        {
            currentIndex = 0;
        }
    lightboxitem.style.backgroundImage = "url("+imgsArray[currentIndex].src+")";
}
function prevMove()
{
    currentIndex--;
    if(currentIndex < 0)
        {
            currentIndex = imgsArray.length - 1;
        }
    lightboxitem.style.backgroundImage = "url("+imgsArray[currentIndex].src+")";
}

wClose.addEventListener("click" , function(e){
    lightboxcontainer.classList.remove("show");
})

document.addEventListener("keydown" , function(eventInfo){
    if(eventInfo.keyCode == 27)  //Escape
        {
            lightboxcontainer.classList.remove("show");
        }
    else if(eventInfo.keyCode == 39)  //rightArrow
         {
             nextMove();
         }
    else if(eventInfo.keyCode == 37) //leftArrow
         {
             prevMove(); 
         }
    
})

lightboxcontainer.addEventListener("click" , function(e) {
    if(e.target == lightboxcontainer)
        {
            lightboxcontainer.classList.remove("show");
        }
})












