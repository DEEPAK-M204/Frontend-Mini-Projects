const colors=["#f8f9fa","#f0f8ff","#f5f5f5","#f7f7f7","#fffafa","#f3f4f6","#f5fffa","#fff5ee"];
const btn=document.getElementById("btn");
const color=document.querySelector(".color");
btn.addEventListener("click",function() {
    const randomColor=getRandomNumber();
    console.log(randomColor)
    document.body.style.backgroundColor=colors[randomColor];
    color.textContent=colors[randomColor];
})
function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}