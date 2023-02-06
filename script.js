let time = new Date();
const inputValu = document.querySelector(".input2")
const caxs = document.getElementById("caxs")
const ashxatavarc = document.querySelector(".input3")
const caxsel = document.getElementById("caxsel")
const gumarel = document.getElementById("gumarel")
const amis = document.getElementById("amis")
const cank = document.getElementById("cank")
const caxsData = []
const cankData = []
caxs.addEventListener("click", function(){
    caxsData.push(+inputValu.value)
    
    let sum = 0
    for(let i = 0; i < caxsData.length; i++){
        sum = sum + caxsData[i]
        let a = document.querySelector(".input1").value;
    document.querySelector(".anun").innerHTML = a;
    cankData.push(document.createElement("span"));
    cank.append(cankData[i]);
    cankData[i].textContent = a + "-" + time + "-" + caxsData[i] + " AMD";    
}
caxsel.textContent = ashxatavarc.value-sum 
gumarel.textContent = sum 
});