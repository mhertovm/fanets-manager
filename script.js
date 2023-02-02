const inputValu = document.querySelector("#inputValue")
const btnexpense = document.getElementById("expenseadd")
const salary = document.querySelector("#salary")
const quantity = document.getElementById("quantity")
const expenseinput = document.getElementById("expenseinput")
const data = []
btnexpense.addEventListener("click", function(){
    data.push(+inputValu.value)
    let expensesum = 0
    for(let i = 0; i < data.length; i++){
        expensesum = expensesum + data[i]
        console.log(data[0])
    };
    expenseinput.textContent = expensesum
    quantity.textContent=salary.value-expensesum
}); 

