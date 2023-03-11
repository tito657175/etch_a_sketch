
const container = document.querySelector('.container');

function getInputValue(){
    // var input = document.getElementById("userInput").value
    makeDivChildren()// add call to function to pull out input
}

function makeDivChildren(){
    for (count = 0; count < 16; count++){
        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = `${count+1}`;
        container.appendChild(content);
        // deleteDiv(e);
    }
}


// function appendChildrenDiv(e);

