document.querySelector("html").addEventListener("click", function () {
  alert("别戳我，我怕疼。");
});
let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "image/机甲.webp") {
    myImage.setAttribute("src", "image/钢铁侠.jpg");
  } else {
    myImage.setAttribute("src", "image/机甲.webp");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    let myName = prompt("请输入你的名字。");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla 酷毙了，" + myName;
  }
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla 酷毙了，" + storedName;
  }
  myButton.onclick = function () {
    setUserName();
  };
      
