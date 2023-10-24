console.log("Hi");

// document.html <h2></h2>
// html에 접근하기위해 설정한 div의 id를 등록 
//

let h2 = document.createElement("h2");

let dom = document.getElementById("dom");

h2.innerText = "My name is kyeong seog";

dom.appendChild(h2);

