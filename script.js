const inputValu = document.querySelector("#inputValue")
const btn = document.getElementById("add")
const data = []
btn.addEventListener("click", function(){
    data.push(+inputValu.value)
    let sum = 0
    for(let i = 0; i < data.length; i++){
        sum = sum + data[i]
    }
    console.log(sum)
    console.log(data[0])
}); 