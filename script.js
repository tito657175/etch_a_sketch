
const container = document.querySelector('.container');

function getInputValue(input){
    var input = document.getElementById("userInput").value
    makeDivChildren(input)// add call to function to pull out input
}

function makeDivChildren(e){
    for (count = 0; count < e; count++){
        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = `${count+1}`;
        container.appendChild(content);
        deleteDiv(e);
    }
}


// function appendChildrenDiv(e);

