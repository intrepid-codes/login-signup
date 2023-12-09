function menuAnimate(){
  var menuBtn1 = document.querySelector(".line1");
  var menuBtn2 = document.querySelector(".line2");
  var menuOpener = document.querySelector("#page1 nav ul");
  if (menuBtn1.className == "line1" && menuBtn2.className == "line2") {
    menuBtn1.className = "line1 rotates";
    menuBtn2.className = "line2 rotate";
    menuOpener.style.left = "0%";
  }else{
    menuBtn1.className = "line1";
    menuBtn2.className = "line2";
    menuOpener.style.left = "100%";
  }
}