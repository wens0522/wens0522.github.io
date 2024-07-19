// document.querySelector("img").addEventListener("click", function () {
//     alert("别戳我，我怕疼。");
//   });
let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/zyx02.jpg") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/zyx02.jpg");
  }
};
