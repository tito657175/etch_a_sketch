//
let num = 32;


const container = document.querySelector(".container");
console.log(container);

const btn = document.querySelector(".btn");
btn.addEventListener("click", function() {
    makeRowDivs(num);
}, {once : true});

var userInput = document.querySelector(".userInput");
const submitButton = document.querySelector(".submitButton");

submitButton.addEventListener("click", function () {
    let i = userInput.value;
    let content = document.querySelector(".content");
    deleteChild();
    delButton();
    makeRowDivs(i);
}
);

function makeRowDivs(i) {
for (count = 0; count < i; count++){
    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = `${count+1}`;
    container.appendChild(content);
    }
}

function deleteChild() {
    var contentClass = document.getElementsByClassName('content');
    console.log(contentClass);
    while (contentClass.length > 0 ){
        contentClass[0].parentNode.removeChild(contentClass[0]);
    }
}

function delButton(){
    var btn = document.getElementsByClassName('btn');
    while (btn.length > 0 )
    btn[0].remove();
}