	const salary = document.getElementById("inp1");
	function f1(gumar){
		let hark = Math.floor(gumar/100*21);
		if(document.getElementById("inp").checked){
			hark = Math.floor(gumar/100*10);
		}
		let bank = Math.floor(gumar/100 * 5);
		if(gumar <= 99000){
			bank = 0
		}
		let comunal = Math.floor(gumar / 100 * 15);
		let number = {
			gumar: gumar,
			ekamtahark: hark,
			xnayoxutyun: bank,
			comunal: comunal,
			mnacord: (gumar-hark-bank),
		}
			return number
	} 
		let caxs = document.getElementById("inp2");
		let count = document.querySelector(".decrement");
		count.addEventListener("click",() => {
			salary.value -= caxs.value
		})
		salary.addEventListener("keyup",()=>{
				document.getElementById("mnacordCount").innerHTML=f1(document.getElementById("inp1").value).mnacord;
				document.getElementById("komunal").innerHTML=f1(document.getElementById("inp1").value).comunal;
				document.getElementById("ekamtahark").innerHTML=f1(document.getElementById("inp1").value).ekamtahark;
				document.getElementById("xnayoxutyun").innerHTML=f1(document.getElementById("inp1").value).xnayoxutyun;
		})
