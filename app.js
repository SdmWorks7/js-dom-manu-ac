let para = document.createElement("p");
para.innerText="Hey I'm red";
document.querySelector('body').append(para);
para.classList.add("red");

let head = document.createElement("h3");
head.innerText="I'm a blue h3";
document.querySelector("body").append(head);
head.classList.add("blue");

 let div= document.createElement("div");
 div.classList.add("design");
 document.querySelector("body").append(div);
 
 let ch1= document.createElement("h1");
 ch1.innerText="I'm in a div";
 let cp= document.createElement("p");
 cp.innerText="ME TOO!";

 div.appendChild(ch1);
 div.appendChild(cp);


 // ques 1;

 let input = document.createElement("input");
 let btn = document.createElement("button");
 btn.innerHTML="Click me!";

 let body=document.querySelector("body");
 body.append(input);
 body.append(btn);

 //ques 2;

 input.setAttribute("placeholder", "username");
 btn.setAttribute("id","btn");

 //ques 3:

 document.querySelector("#btn").classList.add("button");

 //ques 4:
 let head1= document.createElement("h1");
 head1.innerHTML="<u>DOM practice</u>";

 //self
 
 body.append(head1);




