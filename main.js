function F1(){
  var S=Number(document.form1.S1.value)
  var K=Number(document.form1.K1.value)
  var D=Number(document.form1.D1.value)
  var N=Number(document.form1.N1.value)
  var a=(S*K-D)/N;
  return a;
}