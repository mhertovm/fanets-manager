const inputValu = document.querySelector("#inputValue")
const btn = document.getElementById("add")
const data = []
btn.addEventListener("click", function(){
    data.push(inputValu.value)
    console.log(data[0][0]);
    console.log(data[0][1]);
});