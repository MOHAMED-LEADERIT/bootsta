 btnI[i].addEventListener("click" ,function () {
  qteS[i].value++
  count(cardPrice);
});


btnD[i].addEventListener("click", function (e) {
  if (qteS[i].value>1){
    count(-cardPrice);
    qteS[i].value--;}
  });