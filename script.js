
const container = document.querySelector(".container");
console.log(container);

const btn = document.querySelector(".btn");
console.log(btn);

//btn.addEventListener('click',() => {
    // once:true;
    //makeRowDivs();
//});

function makeRowDivs() {
    for (count = 0; count < 32; count++){
        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = `${count+1}`;
        container.appendChild(content);
    }
}