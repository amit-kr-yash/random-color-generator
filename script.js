let bttn=document.querySelector("#btn");

bttn.addEventListener("click",function(){
    let h3=document.querySelector("h3");
    let randomcolor = generateRandomColor();
    h3.innerText = randomcolor;
    let box=document.querySelector("#insidebox");
    box.style.backgroundColor=randomcolor;

});

function generateRandomColor(){
    let r=Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
    let color = `rgb(${r} , ${g} , ${b})`;
    return color;
}