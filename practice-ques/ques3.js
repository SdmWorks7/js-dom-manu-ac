let inp = document.createElement("input");
let head= document.createElement("h2");

document.querySelector("body").append(head);
document.querySelector("body").append(inp);



inp.setAttribute("placeholder","enter your name");

inp.addEventListener("input", function(){
    let str = this.value;
    let isValid=true;
    for(e of str){
        if(!((e>= 'a' && e<='z') || (e>= 'A' && e<='Z') || e ==" ")){
            isValid= false;
        }
    }
    if(isValid){
        head.innerText=`Your Name:${str}`;
    }
});
