let heading = document.getElementById("heading");
let para = document.getElementById("para");
let input = document.getElementById("inputText");


document.getElementById("changeText").addEventListener("click", function () {
    heading.innerHTML = input.value;
});

document.getElementById("bgColor").addEventListener("click", function () {
    document.body.style.backgroundColor = "lightblue";
});


document.getElementById("fontSize").addEventListener("click", function () {
    heading.style.fontSize = "40px";
});


document.getElementById("togglePara").addEventListener("click", function () {
    if (para.style.display === "none") {
        para.style.display = "block";
    } else {
        para.style.display = "none";
    }
});