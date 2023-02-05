const inputValu = document.querySelector("#inputValue");
const btnexpense = document.getElementById("expenseadd");
const btnsalary = document.getElementById("salaryadd");
const salary = document.querySelector("#salary");
const quantity = document.getElementById("quantity");
const expenseinput = document.getElementById("expenseinput");
const cank = document.getElementById("cank");
const btnedit = document.getElementById("editqanak");
const qanak1 = document.getElementById("qanak1");
const qanak2 = document.getElementById("qanak2");
const qanak3 = document.getElementById("qanak3");
const qanak4 = document.getElementById("qanak4");
const edit1 = document.querySelector("#edit1");
const edit2 = document.querySelector("#edit2");
const edit3 = document.querySelector("#edit3");
const edit4 = document.querySelector("#edit4");
const mutq1 = document.getElementById("mutq1");
const mutq2 = document.getElementById("mutq2");
const mutq3 = document.getElementById("mutq3");
const mutq4 = document.getElementById("mutq4");
const sumall = document.getElementById("sum");
let time = new Date();

const cankData = [];
const caxsdata = [];
const balanceData = [];

btnsalary.addEventListener("click", function (){
    
    if(salary.value > 0){
        balanceData.push(+salary.value)
    };
    let balance = 0
    let expensesum = 0
    
    for(let n = 0; n < balanceData.length; n++){
        balance = balance + balanceData[n];
        console.log(balanceData[0]);
    };

    if(inputValu.value > 0){
        caxsdata.push(+inputValu.value)
    };
    
    for(let i = 0; i < caxsdata.length; i++){
        expensesum = expensesum + caxsdata[i];
        console.log(caxsdata[0]);
    };
    expenseinput.textContent = expensesum;
    
    for(let i = 0; i < caxsdata.length; i++){
        cankData.push(document.createElement("span"));
        cank.append(cankData[i]);
        cankData[i].textContent =time + "-" + caxsdata[i] + " AMD";    
    }

    let sum = balance - expensesum
    sumall.textContent = sum
    quantity.textContent = balance
    mutq1.textContent = qanak1.textContent * sum / 100
    mutq2.textContent = qanak2.textContent * sum / 100
    mutq3.textContent = qanak3.textContent * sum / 100
    mutq4.textContent = qanak4.textContent * sum / 100
});



btnedit.addEventListener("click", function(){
    if (+edit1.value + +edit2.value + +edit3.value + +edit4.value == "100"){
    qanak1.textContent = +edit1.value;
    qanak2.textContent = +edit2.value;
    qanak3.textContent = +edit3.value;
    qanak4.textContent = +edit4.value;
    }
    btnsalary.addEventListener("click")
});