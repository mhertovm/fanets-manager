const inputValu = document.querySelector("#inputValue")
const btnexpense = document.getElementById("aexpenseadd")
const salary = document.querySelector("#salary")
const quantity = document.getElementById("quantity")

const data = []
btnexpense.addEventListener("click", function(){
    data.push(+inputValu.value)
    let sum = 0
    for(let i = 0; i < data.length; i++){
        sum = sum + data[i]
        console.log(sum)
        console.log(data[0])
    }
    quantity.textContent=salary.value-sum
}); 

