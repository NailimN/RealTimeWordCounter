let textArea = document.getElementById("text-input");
let charCounter = document.getElementById("char-count");

function updateCharCount(e){
    let textAreaCharNum = e.target.value.length;
    if(textAreaCharNum >= 50){
        e.target.value = e.target.value.substring(0, 50)
        charCounter.style.color = "red";
    } else {
        charCounter.style.color = "black"; 
    }
    textAreaCharNum = e.target.value.length;
    charCounter.innerHTML = `Character Count: ${textAreaCharNum}/50`;
    
    
}


textArea.addEventListener("input", updateCharCount);

