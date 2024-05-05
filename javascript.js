let btn=document.querySelector("button");
btn.addEventListener("click", changeColor);

function changeColor(){
    
    let div=document.querySelector(".div1");
    div.style.backgroundColor=color();

    let p=document.querySelector(".color");
    p.innerText=`RGB : ${color1()}`;

    let div1=document.querySelector(".div2");
    div1.style.border=`7px solid rgb${(color2())}`;
    // div1.style.border=`7px solid rgb(0,0,0)`;
}

function color(){
    let red=Math.floor(Math.random()*255)+1;
    let green=Math.floor(Math.random()*255)+1;
    let blue=Math.floor(Math.random()*255)+1;

    let clr=`rgb(${red},${green},${blue})`;
    return clr;


}

function color2(){
    let red=Math.floor(Math.random()*255)+1;
    let green=Math.floor(Math.random()*255)+1;
    let blue=Math.floor(Math.random()*255)+1;

    let clr=`(${red}, ${green}, ${blue})`;
    return clr;
}

function color1(){
    let div=document.querySelector(".div1");
    return div.style.backgroundColor;
}

let w3=document.querySelector(".w3");
let arr=[];
for(let i=0;i<=360;i++){
    arr.push(`hsl(${i-90}, 100%, 50%)`);
}
 arr=arr.toString();
//  w3.style.backgroundImage=`conic-gradient(${arr})`

///////////////////////////////////////////////////////////

let form1=document.querySelector("form");
form1.addEventListener("submit",function(event){
    event.preventDefault();
    let input=document.querySelector("#inp1");
    let input2=document.querySelector("#inp");
    let c =input.value;
    alert(`Thank you ${c} for give feadback. Your feadback will be to send of service user`);

    setTimeout(() => {
        input2.value="";
        input.value="";
    }, 200);
    });
